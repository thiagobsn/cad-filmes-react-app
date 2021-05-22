
import {Container, Grid} from '@material-ui/core';

const EstruturaDaPagina = (props) => {

    const {titulo, children} = props;

    return (
        <Container>
            <Grid item>
                <Grid item xs={12}>
                    <h1>Aplicação de Locadora</h1>
                </Grid>
                <Grid item xs={12}>
                    <h2>{titulo}</h2>
                </Grid> 
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Container>
    )

}

export default EstruturaDaPagina;