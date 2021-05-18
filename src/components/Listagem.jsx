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
                    <div>
                        <table>

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Título</th>
                                    <th>Subtítulo</th>
                                    <th>Diretor</th>
                                    <th colSpan="2">Acões</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.filmes.map(filme => (
                                    <tr key={filme.id}>
                                        <td>#</td>
                                        <td>{filme.titulo}</td>
                                        <td>{filme.subtitulo}</td>
                                        <td>{filme.diretor}</td>
                                        <td> <button onClick={() => this.handleEditar(filme)}>editar</button> </td>
                                        <td> <button onClick={() => this.handleExcluir(filme)}>excluir</button></td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                }
            </>

        )
    }

}

export default Listagem;