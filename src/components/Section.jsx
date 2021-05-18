import React from 'react';
import {Grid} from '@material-ui/core'


const Section = props => {

    const {titulo, children} = props;

    return (
        <Grid container>
            <h2>{titulo}</h2>
            {children}
        </Grid>
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