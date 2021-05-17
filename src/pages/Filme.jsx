import {Component} from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../components/Listagem';


class Filme extends Component {

    render(){
        return(
            <>
                <EstruturaDaPagina titulo="Cadastro de Filme">

                    <Section>Cadastro</Section>
                    <Section>
                        <Listagem/>
                    </Section>

                </EstruturaDaPagina>
               
            </>
        )
    }

}

export default Filme;