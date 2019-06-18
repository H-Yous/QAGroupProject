import React, {Component} from 'react';
import './nowShowing.css';
import posterjpg from '../assets/avengers.jpg';

class Poster extends Component{
    render() {
        const{posterURL} = this.props;

        return(
            <img
                className="poster"
                src={posterjpg}
                alt='avengers'
                width="200"
                height="300"
            />
        )
    }
        
}
export default Poster;