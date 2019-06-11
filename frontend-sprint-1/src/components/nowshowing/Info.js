import React, {Component} from 'react';

import './nowShowing.css';


class Info extends Component{
    render(){
        const{info} = this.props;
        return(
            <div className='info'>{info}</div>
        )
    }
}

export default Info;