import {Component} from 'react';


class Section extends Component {

    constructor(props){
        super(props);
         this.children = this.props.children;
    }

    render(){
        return (
            <div>
                {this.children}
            </div>
        )
    }
}

export default Section;