import { useEffect, useState } from "react";
import EstruturaDaPagina from "../../components/EstruturaDaPagina";
import Listagem from "../../components/Listagem";
import Section from "../../components/Section";
import FilmeService from "../../services/FilmeService";
import {Link} from 'react-router-dom';
import { Button, Grid } from "@material-ui/core";


const PageListaFilme = props => {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        carregarFilmes();
        return function cleanup() {
            setFilmes([]);
          };
    },[]);

    const carregarFilmes = async () => {
        const filmes = await FilmeService.buscarFilmes();
        setFilmes(filmes);
    };

    const editarFilme = (filme) => {
        // setFilmeEmEdicao(filme);
    };

    const excluirFilme = (filme) => {
        FilmeService.excluirFilme(filme.id).then(() => carregarFilmes());
    };


    return (

        <EstruturaDaPagina titulo='Filmes'>

            <Section titulo="Listagem de Filmes">
                <Grid container spacing={2}>
                    <Grid item xs={11}>
                        <Grid container spacing={3} justify="flex-end">
                            <Grid item>
                                <Button variant="contained" component={Link} to="/filmes/cadastro" color="primary">Novo</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Listagem filmes={filmes} editar={editarFilme} excluir={excluirFilme}/>
                    </Grid>
                </Grid>
                
            </Section>

        </EstruturaDaPagina>
    );

}

export default PageListaFilme;