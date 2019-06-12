import React, {Component} from 'react';
import './nowShowing.css';
import posterjpg from './split.jpg';

class Poster extends Component{
    render() {
        const{posterURL} = this.props;

        return(
            <img
                className="poster"
                src={posterjpg}
                alt='split'
                width="200"
                height="300"
            />
        )
    }
        
}
export default Poster;