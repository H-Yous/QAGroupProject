import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Row, Col} from 'react-bootstrap';
import Script from 'react-script-tag';

class ContactPanel extends Component{
    render(){
        const{posterURL, title, information, showtimes} = this.props;
        return(
            <div class="container">
                <form action="http://localhost:3000/contact" method="POST">
                    <View style={{flex:1, flexDirection:'column', alignItems:"stretch"}}>
                        <input type="text" id="email" name="email"
                            placeholder="Email Address..." /><br></br>
                            
                        <textarea id="subject" name="subject"
                            placeholder="We aim to reply to your enquiry within 3 working days.">
                        </textarea>

                        <br/>
                        <input type="submit" value="submit" />
                    </View>
                </form>

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
        );
    };
}

export default ContactPanel;