import React, {Component} from 'react';
import './nowShowing.css';

class Title extends Component{
    render() {
        const{title} = this.props;

        return(
            <span className='title'>
                <h3>Split</h3>
            </span>
        )
    }
}

export default Title;
