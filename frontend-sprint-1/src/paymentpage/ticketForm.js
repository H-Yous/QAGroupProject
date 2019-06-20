import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
import styled from "styled-components";

const Border = styled.form`
  border: solid 1px grey;
`;

class TicketForm extends Component {
  chosen = [];

  constructor(props) {
    super(props);

    this.chosen = this.props.chosenSeats;
    console.log(this.chosen + "---- CHOSEN");
    this.state = {
      seats: this.chosen.seat,
      tickets: this.chosen.type,
      price: this.chosen.price,

      numOfSeats: Object.keys(this.chosen).length
    };
  }

  renderFormRow(x) {
    console.log(x.seat);
    return (
      <Form.Row>
        <Col>{x.seat}</Col>
        <Col>{x.type}</Col>
        <Col>£{x.price}</Col>
      </Form.Row>
    );
  }

  renderCreate() {
    return this.chosen.map(x => this.renderFormRow(x));
  }

  render() {
    return (
      <Border>
        <Form>
          <center>
            <Form.Row>
              <Col>
                <b>Seat</b>
              </Col>
              <Col>
                <b>Ticket</b>
              </Col>
              <Col>
                <b>Price</b>
              </Col>
            </Form.Row>

            {this.renderCreate()}
          </center>
        </Form>
      </Border>
    );
  }
}

export default TicketForm;
