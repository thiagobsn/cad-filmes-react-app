import { useEffect, useState } from "react";
import EstruturaDaPagina from "../../components/EstruturaDaPagina";
import Cadastro from "../../components/Cadastro";
import Section from "../../components/Section";
import FilmeService from "../../services/FilmeService";
import { useParams } from "react-router";
import { FILME_INICIAL} from '../../util/constantes';


const PageCadastroFilme = props => {


    const {id} = useParams();
    const [filmeEmEdicao, setFilmeEmEdicao] = useState();
    
    useEffect(() =>{
        console.log('Filme - useEffect - filmeEmEdicao em edição:', filmeEmEdicao)
    },[filmeEmEdicao]);

    useEffect(() =>{
        if(!id){
            setFilmeEmEdicao(FILME_INICIAL);
            return;
        }
        carregaFilme(id);
    },[id]);

    const carregaFilme = async (id) => {
        const filme = await FilmeService.buscarFilme(id);
        setFilmeEmEdicao(filme);
    }

    const salvarFilme = filme => {
        if(filme.id){
            FilmeService.atualizarFilme(filme).then(() => {
                setFilmeEmEdicao(null);
            });
            return;
        }else{
            FilmeService.inserirFilme(filme).then(() => {
                setFilmeEmEdicao(null);
            });
        }
    };

    const limparFilmeEmEdicao = () =>{
        setFilmeEmEdicao(null);
    };


    return (
        
            <EstruturaDaPagina titulo='Filmes'>
                <Section titulo="Cadastro de Filmes">
                    <Cadastro filme={filmeEmEdicao} salvar={salvarFilme} limpar={limparFilmeEmEdicao} />
                </Section>
            </EstruturaDaPagina>

    );




};

export default PageCadastroFilme;