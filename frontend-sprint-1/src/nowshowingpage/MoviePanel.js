import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Row, Col} from 'react-bootstrap';
import Poster from './Poster.js';
import Title from './Title.js';
import Info from './Info.js';
import ShowTimes from './ShowTimes.js';

class MoviePanel extends Component{
    render(){
        const{posterURL, title, information, showtimes} = this.props;
        return(
            <div>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <Poster posterURL = {this.posterURL} />
                    <View style={{flex:1, flexDirection: 'column', backgroundColor: 'powderblue'}}>
                        <Title title = {this.title} />
                        <Info information = {this.information} />
                        <ShowTimes showtimes = {this.showtimes} />
                    </View>
                </View>
            </div>
        );
    };
}

export default MoviePanel;