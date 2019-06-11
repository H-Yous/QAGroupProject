import React, {Component} from 'react';


import './nowShowing.css';

class Title extends Component{

    render(){
        const{Title} = this.props;

        return(
            <span className='title'>{Title}</span>
        )
    }
}

export default Title;
