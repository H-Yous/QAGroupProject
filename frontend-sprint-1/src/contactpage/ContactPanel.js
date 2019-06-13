import React, {Component} from 'react';
import {View} from 'react-native';
import Script from 'react-script-tag';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import { withRouter } from "react-router-dom";

class ContactPanel extends Component{
    
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context){
        super(props, context);
        this.state={
            
            feedback:'',
        }
        const feedbackValue = null;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) =>{
        const changeState = this.state;
        changeState[event.target.name] = event.target.value;
        this.feedbackValue = event.target.value;
        this.setState(changeState);
        console.log(event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const submitState = this.state;
        this.setState(submitState);
        console.log(this.feedbackValue+": this one!");

        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        console.log(this.feedbackValue+": lol");
        axios.post('/contact/sendEmail', {
            emailText: this.feedbackValue
        })
            .then((result) => {
                this.props.history.push('/contact');
                console.log(result+": result");
            })
            .catch(err => {
                console.error('Failed to send feedback. '+err)
            })
        ;
    }

    render(){
        const feedback = this.state;

        return(
            <div className="all">
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                    <div className="widget">
                        <Script
                            src="https://static.citymapper.com/js/embed/widget.js"
                            data-slug="aqdr31qt5m"
                            data-width="300"
                            type="text/javascript"
                            onLoad={this._onMyScriptLoad}
                            onError={this._onMyScriptError}
                            async
                        />
                    </div>

                    <div className="contact-container">
                        <form className="feedback" onSubmit={this.handleSubmit} >
                            <View style={{flex:1, flexDirection:'column', width:800}}>

                                <textarea
                                    className="text-input"
                                    id="feedback"
                                    name="feedback"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.feedback}
                                    rows="16"
                                    placeholder="We aim to reply to your enquiry within 3 working days."
                                    required
                                />

                                <br/>

                                <input
                                    type="submit"
                                    value="Submit"
                                />
                                
                            </View>
                        </form>
                    </div>
                </View>
            </div>
        );
    };
}

export default withRouter(ContactPanel);