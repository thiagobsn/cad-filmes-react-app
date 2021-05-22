import {Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Component} from 'react';

class Listagem extends Component {

    handleEditar(filme){
        console.log('handleEditar');
        this.props.editar(filme);
    }

    handleExcluir(filme){
        console.log('handleExcluir');
        this.props.excluir(filme);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.filmes === this.props.filmes){
            return true;
        }

        console.log('Listagem - componentDidUpdate', this.props.filmes)
    }

    render(){
        return(
            
            <>
                {(!this.props.filmes || this.props.filmes.length === 0 ) &&
                    <span>Não exitem filmes a ser listados.</span>
                }
                {this.props.filmes && this.props.filmes.length > 0 &&

                    <Grid container>
                        <Grid item xs={11}>
                            <TableContainer component={Paper} elevation={3}>
                                <Table size="small">

                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Título</TableCell>
                                            <TableCell>Subtítulo</TableCell>
                                            <TableCell>Diretor</TableCell>
                                            <TableCell colSpan="2">Acões</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {this.props.filmes.map(filme => (
                                            <TableRow key={filme.id}>
                                                <TableCell>#</TableCell>
                                                <TableCell>{filme.titulo}</TableCell>
                                                <TableCell>{filme.subtitulo}</TableCell>
                                                <TableCell>{filme.diretor}</TableCell>
                                                <TableCell width="5%"> 
                                                    <IconButton aria-label="delete" onClick={() => this.handleEditar(filme)}>
                                                        <EditIcon />
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell width="5%"> 
                                                    <IconButton aria-label="delete" onClick={() => this.handleExcluir(filme)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>


                                </Table>
                            </TableContainer>

                        </Grid>
                    </Grid>
                }
            </>

        )
    }

}

export default Listagem;