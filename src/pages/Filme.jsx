
import React, {Component}  from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../components/Listagem';

class Filme extends Component {
    render(){
        return (
            <>
                <EstruturaDaPagina title='Filmes'>
                    <Section title="Cadastro de Filmes">
                        <h1>Teste</h1>
                    </Section>
                    <Section title="Listagem de Filmes"></Section>
                </EstruturaDaPagina>
                
            </>
        )
    }
}

export default Filme;