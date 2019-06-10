import React, {Component} from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import Poster from './Poster.js';
import Title from './Title.js';
import Info from './Info.js';




class MoviePanel extends Component{
    render(){
        const{posterURL, title, information, showingTimes} = this.props;
        return(
            <div>
                <Poster
                posterURL = {this.posterURL}
                />
                <Title 
                title = {this.title}
                />
                <Info
                information = {this.information}
                />
            </div>
        );
    };
}

export default MoviePanel;