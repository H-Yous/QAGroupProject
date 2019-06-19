import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
<<<<<<< HEAD
import CheckoutForm from "./CheckoutForm";
import Axios from "axios";

import TicketForm from "./ticketForm";
=======
import { Card } from "react-bootstrap";
import CheckoutForm from "./CheckoutForm";
import TicketForm from "./ticketForm";
import Axios from "axios";
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6

class Payment extends Component {
  //THIS IS WHERE YOU GET THE CHOSEN SEAT STUFF
  //REFERENCE VIA this.state.chosenSeats[0].
  //                                       .seatnum
  //                                       .ticket
  //                                       .price
  state = this.props.location.state;
  seats;
<<<<<<< HEAD
  componentDidMount() {
    console.log(this.state);
    var total = 0;

    this.seats = "";
    for (var i = 0; i < this.state.chosenSeats.length; i++) {
      total = total + this.state.chosenSeats[i].price;

      this.seats += JSON.stringify(this.state.chosenSeats[i].seatnum);
      console.log(this.state.chosenSeats[i].seatnum);
    }
    console.log(this.seats);
    console.log(total);
    document.getElementById("total").innerText = total;

=======

  componentDidMount() {
    console.log(this.state);
    var total = 0;
    this.seats = "";
    for (var i = 0; i < this.state.length; i++) {
      total = total + this.state[i].price;
      this.seats += JSON.stringify(this.state[i].seatnum);
      console.log(this.state[i].seatnum);
    }
    console.log(this.seats);
    console.log(total);
    document.getElementById("total").innerText = total;

>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
    Axios.post("http://localhost:8080/total", {
      total: total
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
<<<<<<< HEAD
=======
    
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
  }

  render() {
    return (
<<<<<<< HEAD
      <StripeProvider apiKey="pk_test_iXkwILOm0dHnfTVPsiDy8Mw0007ohxGCzC">
        <div className="example">
          <TicketForm chosenSeats={this.state} />

          <span>
            <h2>£:</h2>
            <h1 id="total">total</h1>
          </span>
          <Elements>
            <CheckoutForm chosenSeats={this.state} seats={this.seats} />
          </Elements>
        </div>
      </StripeProvider>
=======
      <Card style={{ opacity: "0.92" }}>
        <Card.Body>
          <StripeProvider apiKey="pk_test_iXkwILOm0dHnfTVPsiDy8Mw0007ohxGCzC">
            <div className="example">
              <TicketForm chosenSeats={this.state} />

              <span>
                <h2>£:</h2>
              <h1 id="total">{this.total}</h1>
              </span>
              <Elements>
                <CheckoutForm chosenSeats={this.state} />
              </Elements>
            </div>
          </StripeProvider>
        </Card.Body>
      </Card>
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
    );
  }
}

export default Payment;
