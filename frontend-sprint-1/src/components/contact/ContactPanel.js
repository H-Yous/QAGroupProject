import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Container, Row, Col} from 'react-bootstrap';
import Script from 'react-script-tag';
import ReactTable from 'react-table';

export default class ContactPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            formSubmitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static sender = 'visitor@purpleqacinemas.com';

    handleChange(event) {
        
        this.setState({
            feedback: event.target.value
        });
      }

      handleSubmit (event) {
        event.preventDefault()
    
        //use this!
        console.log(process.env.REACT_APP_EMAILJS_RECEIVER);

        const {
          REACT_APP_EMAILJS_RECEIVER: receiverEmail,
          REACT_APP_EMAILJS_TEMPLATEID: template
        } = this.props.env
    
        this.sendFeedback(
          template,
          this.props.senderEmail,
          receiverEmail,
          this.state.feedback)
    
        this.setState({
          formSubmitted: true
        })
      }
    
      sendFeedback (templateId, senderEmail, receiverEmail, feedback) {
        window.emailjs.send(
          'mailgun',
          templateId,
          {
            senderEmail,
            receiverEmail,
            feedback
          })
          .then(res => {
            this.setState({ formEmailSent: true })
          })

          .catch(err => console.error('Failed to send feedback. Error: ', err))
      }

    render(){
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
                        <form className="feedback-form" onSubmit={this.handleSubmit}>
                            <View style={{flex:1, flexDirection:'column', width:800}}>

                                <textarea
                                    className="text-input"
                                    id="feedback-entry"
                                    name="feedback-entry"
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

ContactPanel.propTypes = {
    env: PropTypes.object.isRequired
};