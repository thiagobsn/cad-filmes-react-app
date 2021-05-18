import {Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core'
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
                            <TableContainer component={Paper}>
                                <Table size="smal">

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
                                            <TableRow>
                                                <TableCell>#</TableCell>
                                                <TableCell>{filme.titulo}</TableCell>
                                                <TableCell>{filme.subtitulo}</TableCell>
                                                <TableCell>{filme.diretor}</TableCell>
                                                <TableCell> <button onClick={() => this.handleEditar(filme)}>editar</button> </TableCell>
                                                <TableCell> <button onClick={() => this.handleExcluir(filme)}>excluir</button></TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>


                                </Table>
                            </TableContainer>

                        </Grid>
                    </Grid>

                    // <div>
                    //     <table>

                    //         <thead>
                    //             <tr>
                    //                 <th>#</th>
                    //                 <th>Título</th>
                    //                 <th>Subtítulo</th>
                    //                 <th>Diretor</th>
                    //                 <th colSpan="2">Acões</th>
                    //             </tr>
                    //         </thead>

                    //         <tbody>
                    //             {this.props.filmes.map(filme => (
                    //                 <tr key={filme.id}>
                    //                     <td>#</td>
                    //                     <td>{filme.titulo}</td>
                    //                     <td>{filme.subtitulo}</td>
                    //                     <td>{filme.diretor}</td>
                    //                     <td> <button onClick={() => this.handleEditar(filme)}>editar</button> </td>
                    //                     <td> <button onClick={() => this.handleExcluir(filme)}>excluir</button></td>
                    //                 </tr>
                    //             ))}
                    //         </tbody>

                    //     </table>
                    // </div>
                }
            </>

        )
    }

}

export default Listagem;