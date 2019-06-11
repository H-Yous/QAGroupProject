import React, {Component} from 'react';


import './nowShowing.css';
class Poster extends Component{
    
    render() {
        const{posterURL} = this.props;

        return (
            <div className="poster">
                <img 
                src={posterURL} 
                alt='split' 
                width="100" 
                height="150"/>
            </div>
        )
    }
        
}
export default Poster;