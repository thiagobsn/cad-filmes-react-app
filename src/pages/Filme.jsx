
import React, {Component}  from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../components/Listagem';
import FilmeService from '../services/FilmeService';

class Filme extends Component {

    constructor(props){
        super(props);

        this.state = {filmes : []};

        this.excluirFilme = this.excluirFilme.bind(this);
        this.editarFilme  = this.editarFilme.bind(this);

    }

    carregarFilmes(){
        FilmeService.buscarFilmes()
                    .then(data => {
                        this.setState({filmes:data})
                    }); 
    }

    editarFilme(filme){
        this.setState({filmeEmEdicao:filme}, () => {
            console.log(this.state.filmeEmEdicao)
        });
       
    }

    excluirFilme(filme){
        // let filmesAtualizados = this.state.filmes.filter(filme => filme.id !== filmeAExcluir.id);
        // this.setState({filmes : filmesAtualizados});
        FilmeService.excluirFilme(filme.id).then(() => this.carregarFilmes());
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
                        <h1>Teste</h1>
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