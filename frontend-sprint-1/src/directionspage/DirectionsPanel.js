import React, {Component} from 'react';
import {View} from 'react-native';
import Script from 'react-script-tag';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import { withRouter } from "react-router-dom";


export default class DirectionsPanel extends Component{
    render(){
        return(
            <div className="widget">
                <Script
                    src="https://static.citymapper.com/js/embed/widget.js"
                    data-slug="aqdr31qt5m"
                    data-width={window.innerWidth}
                    type="text/javascript"
                    onLoad={this._onMyScriptLoad}
                    onError={this._onMyScriptError}
                    async
                />
            </div>
        )
    }
}