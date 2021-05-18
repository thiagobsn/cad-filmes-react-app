import React from 'react';


const Section = props => {

    const {titulo, children} = props;

    return (
        <div className="section">
            <h2>{titulo}</h2>
            {children}
        </div>
    )

}


// import {Component} from 'react';

// class Section extends Component {

//     constructor(props){
//         super(props);
//          this.children = this.props.children;
//          his.titulo = this.props.titulo;
//     }

//     render(){
//         return (
//             <div className="section">
//                 <h2>{titulo}</h2>
//                 {children}
//             </div>
//         )
//     }
// }

export default Section; 