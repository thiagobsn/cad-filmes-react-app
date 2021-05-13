import {Component} from 'react';

class EstruturaDaPagina extends Component {
    render(){
        return (
            <div>
                <div>
                    <h1>Aplicação de Locadora</h1>
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        )
    }
}

export default EstruturaDaPagina;