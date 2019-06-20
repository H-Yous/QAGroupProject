import React, { Component } from "react";
import CreateScreen from "./CreateScreen.js";
import { Table } from "react-bootstrap";

class BookingChart extends Component {
  state = this.props.location.state;
  render() {
    return (
      <div id="venue_map">
        <Table striped borderless variant="light" size="sm">
          <tr>
            <h3>
              <center>{this.state.eventKey}</center>
            </h3>
          </tr>
          <tr>
            <CreateScreen
              publicKey="254e39d5-d1cd-4d23-bc63-ae26cc602338"
              eventKey={this.state.eventKey}
              maxObjects={3}
              movie={this.state.title}
              async
            />
          </tr>
        </Table>
      </div>
    );
  }
}
export default BookingChart;
