import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Row, Col} from 'react-bootstrap';

class AboutPanel extends Component{
    render(){
        return(
            <div class="all">
                <center><h1>About us</h1> </center><br/>
                <h1>QA Cinema</h1><br/>
                <p>QA Cinema is one of the world's leading cinema operators, managing the most respected bransds in major European markets spanning ten countries, over 300 sites and over 1500 screens.</p>
                <h3>About QA Entertainment</h3>
                <p>QA Entertainment is a leader in the premium entertainment cinema sector in the UK. <br/> Committed to continued growth and development of its premium entertainment big screen experience, QA delivers the best choice of content, combined with the best technology in the best environment.</p>
                
            </div>
        
        );
    };
}

export default AboutPanel;