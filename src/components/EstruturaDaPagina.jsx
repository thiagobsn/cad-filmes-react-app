import {Component} from 'react';

class EstruturaDaPagina extends Component {
    render(){
        return (
            <div className="mainPage">
                <div className="header">
                    <h1>Aplicação de Locadora</h1>
                    <h2>{this.props.titulo}</h2>
                </div>
                <div>
                    {this.props.children}
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default EstruturaDaPagina;