import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { Card } from "react-bootstrap";
import CheckoutForm from "./CheckoutForm";
import TicketForm from "./ticketForm.js";
import Axios from "axios";

class Payment extends Component {
  //THIS IS WHERE YOU GET THE CHOSEN SEAT STUFF
  //REFERENCE VIA this.state.chosenSeats[0].
  //                                       .seatnum
  //                                       .ticket
  //                                       .price
  state = this.props.location.state;
  seats;

  componentDidMount() {
    console.log(this.state.eventKey);
    console.log("----- /payment" + this.state.chosenSeats);
    var total = 0;
    
    for (var i = 0; i < this.state.chosenSeats.length; i++) {
      total = total + this.state.chosenSeats[i].price;
      
    }
    
    console.log(total);
    document.getElementById("total").innerText = total;

    Axios.post("http://localhost:8080/total", {
      total: total
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Card style={{ opacity: "0.92" }}>
        <Card.Body>
          <StripeProvider apiKey="pk_test_iXkwILOm0dHnfTVPsiDy8Mw0007ohxGCzC">
            <div className="example">
              <TicketForm chosenSeats={this.state.chosenSeats} />

              <span>
                <h2>£:</h2>
                <h1 id="total">{this.total}</h1>
              </span>
              <Elements>
                <CheckoutForm chosenSeats={this.state.chosenSeats} eventKey={this.state.eventKey} />
              </Elements>
            </div>
          </StripeProvider>
        </Card.Body>
      </Card>
    );
  }
}

export default Payment;
