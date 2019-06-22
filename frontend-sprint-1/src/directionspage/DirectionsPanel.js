import React, { Component } from "react";
import { Table } from "react-bootstrap";
import skdlogo from "../assets/logo/skdlogo.svg";

export default class DirectionsPanel extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="widget">
          <Table striped borderless variant="light" size="sm">
            <tr style={{ textAlign: "center" }}>
              <a href="http://www.skdocks.co.uk/" target="_blank">
                <img src={skdlogo} style={{ width: 125, height: 125 }} />
              </a>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <a href="https://citymapper.com/go/cwhc4h57zh" target="_blank">
                <img
                  src="https://static.citymapper.com/img/embed/GetMeThere_Citymapper.png"
                  alt="Get directions with Citymapper"
                />
              </a>
            </tr>
            <tr>
              <br />
            </tr>
            <tr style={{ alignContent: "center" }}>
              <iframe
                className="map"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=51.5075175,-0.0743509&amp;q=International%20House%201%20St%20Katharine's%20Way+(QA%20Cinemas)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                width={window.innerWidth - 170}
                height={window.innerHeight - 425}
              >
                <a href="https://www.maps.ie/map-my-route/">Map a route</a>
              </iframe>
            </tr>
          </Table>
        </div>
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}
