
import React, {Component}  from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../components/Listagem';
import Cadastro from '../components/Cadastro';
import FilmeService from '../services/FilmeService';

class Filme extends Component {

    constructor(props){
        super(props);

        this.state = {filmes : []};

        this.excluirFilme = this.excluirFilme.bind(this);
        this.editarFilme  = this.editarFilme.bind(this);

    }

    async carregarFilmes(){
        const filmes = await FilmeService.buscarFilmes();
        this.setState({filmes:filmes})
    }

    editarFilme(filme){
        this.setState({filmeEmEdicao:filme}, () => {
            console.log(this.state.filmeEmEdicao)
        });
       
    }

    excluirFilme(filme){
        FilmeService.excluirFilme(filme.id).then(() => this.carregarFilmes());
    }

    salvarFilme = filme => {
        if(filme.id){
            FilmeService.atualizarFilme(filme).then(() => {
                this.carregarFilmes();
                this.setState({filmeEmEdicao: null});
            });
            return;
        }else{
            FilmeService.inserirFilme(filme).then(() => {
                this.carregarFilmes();
                 this.setState({filmeEmEdicao: null});
            });
        }
    }

    limparFilmeEmEdicao = () =>{
        this.setState({filmeEmEdicao:null});
    }


    componentDidMount(){
        this.carregarFilmes();
    }


    componentDidUpdate(prevProps, prevState){
        if(prevState.filmeEmEdicao === this.state.filmeEmEdicao){
            return true;
        }

        console.log('Filme - componentDidUpdate - this.state.filmeEmEdicao em edição:', this.state.filmeEmEdicao)
    }
    

    render(){
        return (
            <>
                <EstruturaDaPagina titulo='Filmes'>
                    <Section titulo="Cadastro de Filmes">
                        <Cadastro filme={this.state.filmeEmEdicao} salvar={this.salvarFilme} limpar={this.limparFilmeEmEdicao} />
                    </Section>

                    <Section titulo="Listagem de Filmes">
                        <Listagem filmes={this.state.filmes} editar={this.editarFilme} excluir={this.excluirFilme}/>
                    </Section>

                </EstruturaDaPagina>
                
            </>
        )
    }
}

export default Filme;