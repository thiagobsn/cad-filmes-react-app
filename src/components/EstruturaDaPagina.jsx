import {Component} from 'react';
import {Container, Grid} from '@material-ui/core';

class EstruturaDaPagina extends Component {
    render(){
        return (
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <h1>Aplicação de Locadora</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h2>{this.props.titulo}</h2>
                    </Grid> 
                </Grid>
                {this.props.children}
            </Container>
        )
    }
}

export default EstruturaDaPagina;