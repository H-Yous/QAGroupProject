import React, {Component} from 'react';
import {View} from 'react-native';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import towerbridge from '../assets/towerbridge.jpg';

class ContactPanel extends Component{
    
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context){
        super(props, context);
        this.state={
            enquirerEmail:'',
            enquirerPlaceholder:'Email address...',
            feedback:'',
            placeholder:'We aim to process your enquiry within three working days, and will never share your email address.'
        }
        const enquirerEmailValue = null;
        const feedbackValue = null;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange = (event)=> {
        const changeState = this.state;
        changeState[event.target.name] = event.target.value;
        this.enquirerEmailValue = event.target.value;
        this.setState(changeState);
        console.log(event.target.value);
    }

    handleFeedbackChange = (event) => {
        const changeState = this.state;
        changeState[event.target.name] = event.target.value;
        this.feedbackValue = event.target.value;
        this.setState(changeState);
        console.log(event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.persist();
        
        const submitState = this.state;
        this.setState(submitState);

        axios.defaults.baseURL = 'http://localhost:8080';
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post('/contact/sendEmail', {
            enquirerEmail: this.enquirerEmailValue,
            emailText: this.feedbackValue
        })
            .then((result) => {
                this.props.history.push('/contact');
                this.setState({
                    enquirerEmail:'',
                    enquirerPlaceholder:'Your email address has been logged.',
                    feedback: '', 
                    placeholder:'Email sent!'
                });
            })
            .then(() => new Promise(resolve => setTimeout(resolve, 2500)))
            .then((result) => {
                this.setState({
                    enquirerPlaceholder: 'Email address...',
                    placeholder: 'We aim to process your enquiry within three working days, and will never share your email address.'
                })
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
                <View style={{flex:1, flexDirection:'row-reverse', justifyContent:'space-between'}}>

                <div className="contactinfo-container">
                        <View style={{flex:1, flexDirection:'column'}}>
                            <label
                                className="contactinfoLabel"
                                id="contactinfo"
                                name="contactinfo"
                            >
                                <b>Enquiries Address:</b><br/>
                                <i>c/o QA Cinemas, Ltd.</i><br/>
                                PO Box 555-0123<br/>
                                Tammouth TM9 8EF<br/>
                                Alanshire<br/>
                                United Kingdom<br/>
                            </label>

                            <br/>

                            <label
                                className="venuecontactinfoLabel"
                                id="venuecontactinfo"
                                name="venuecontactinfo"
                            >
                                <b>Venue Address:</b><br/>
                                <i>3.329, International House</i><br/>
                                1 St. Katharine's Way<br/>
                                St. Katharine's & Wapping<br/>
                                London E1W 1UN<br/>
                                Greater London<br/>
                                United Kingdom
                            </label>
                        </View>
                    </div>

                    <div className="contact-container">
                        <form className="feedback" onSubmit={this.handleSubmit} >
                            <View style={{flex:1, flexDirection:'column', width:500}}>
                                <input
                                    className="text-input"
                                    id="enquirerEmail"
                                    name="enquirerEmail"
                                    onChange={this.handleEmailChange.bind(this)}
                                    value={this.state.enquirerEmail}
                                    placeholder={this.state.enquirerPlaceholder}
                                    required
                                />

                                <br />

                                <textarea
                                    className="text-input"
                                    id="feedback"
                                    name="feedback"
                                    onChange={this.handleFeedbackChange.bind(this)}
                                    value={this.state.feedback}
                                    rows="18"
                                    placeholder={this.state.placeholder}
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

                    <div>
                        <label
                            className="enquirerEmailLabel"
                            id="enquirerEmail"
                            name="enquirerEmail"
                        >
                            <i>You can contact us directly here.</i><br/>
                            <i>Alternatively, you can take a look at our <Link to='/faq'>FAQ</Link>.</i>
                        </label>
                        
                        <br/>

                        <img
                            src={towerbridge}
                        />    
                    </div>
                </View>
            </div>
        );
    };
}

export default withRouter(ContactPanel);