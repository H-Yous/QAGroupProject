import React, { Component } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import { CardElement, injectStripe } from "react-stripe-elements";
import { withRouter } from "react-router-dom";
import Axios from "axios";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
    this.state = { validated: false };
    this.chosenSeats = this.props.chosenSeats;
    this.seats = this.props.seats;
  }

  submit = async event => {
    // User clicked submit

    try {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.setState({ validated: true });

      let { token } = await this.props.stripe.createToken({ name: "Name" });
      let response = await fetch("http://localhost:8080/charge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: token.id
      });
      if (response.ok) this.setState({ complete: true });
    } catch (e) {}
  };

  handleRedirect(chosenSeats) {
    console.log(this.chosenSeats);

    for (var i = 0; i < this.chosenSeats.length; i++) {
      Axios.post("http://localhost:8080/bookthis", {
        seats: this.chosenSeats[i].seatnum,
        token: this.chosenSeats[i].newtoken,
        title: this.chosenSeats[i].movieTitle,
        price: this.chosenSeats[i].price,
        type: this.chosenSeats[i].ticket
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    Axios.post("http://localhost:8080/SendBooking");
    this.props.history.push("/confirmation", { chosenSeats });
  }

  render() {
    const { validated } = this.state;

    if (this.state.complete) {
      this.handleRedirect(this.chosenSeats);
    }

    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Forename</Form.Label>
            <Form.Control required type="text" placeholder="Forename..." />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Surname</Form.Label>
            <Form.Control required type="text" placeholder="Surname..." />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
            <Form.Label>E-Mail</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row />
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Form.Group>
          <p>Would you like to complete the purchase?</p>
          <CardElement style={{ base: { fontSize: "18px" } }} />
          <br />
          <Button variant="primary" size="lg" onClick={this.submit}>
            Pay Now
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default withRouter(injectStripe(CheckoutForm));
