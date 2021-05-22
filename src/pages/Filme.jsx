
import React, {useState, useEffect}  from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../components/Listagem';
import Cadastro from '../components/Cadastro';
import FilmeService from '../services/FilmeService';

const Filme = props => {

    const [filmes, setFilmes] = useState([]);
    const [filmeEmEdicao, setFilmeEmEdicao] = useState();
    
    useEffect(() => {
        carregarFilmes();
    },[]);

    useEffect(() =>{
        console.log('Filme - useEffect - filmeEmEdicao em edição:', filmeEmEdicao)
    },[filmeEmEdicao]);

    const carregarFilmes = async () => {
        const filmes = await FilmeService.buscarFilmes();
        setFilmes(filmes);
    };

    const editarFilme = (filme) => {
        setFilmeEmEdicao(filme);
       
    };

    const excluirFilme = (filme) => {
        FilmeService.excluirFilme(filme.id).then(() => carregarFilmes());
    };

    const salvarFilme = filme => {
        if(filme.id){
            FilmeService.atualizarFilme(filme).then(() => {
                carregarFilmes();
                setFilmeEmEdicao(null);
            });
            return;
        }else{
            FilmeService.inserirFilme(filme).then(() => {
                carregarFilmes();
                setFilmeEmEdicao(null);
            });
        }
    };

    const limparFilmeEmEdicao = () =>{
        setFilmeEmEdicao(null);
    };
    
    return (
        <>
            <EstruturaDaPagina titulo='Filmes'>
                <Section titulo="Cadastro de Filmes">
                    <Cadastro filme={filmeEmEdicao} salvar={salvarFilme} limpar={limparFilmeEmEdicao} />
                </Section>

                <Section titulo="Listagem de Filmes">
                    <Listagem filmes={filmes} editar={editarFilme} excluir={excluirFilme}/>
                </Section>

            </EstruturaDaPagina>
            
        </>
    )

}

export default Filme;