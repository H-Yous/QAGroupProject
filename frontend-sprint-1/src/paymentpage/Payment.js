import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { Row,Col } from 'react-bootstrap';
import CheckoutForm from './CheckoutForm';

import TicketForm from './ticketForm';
import Axios from 'axios';

class Payment extends Component {
  //THIS IS WHERE YOU GET THE CHOSEN SEAT STUFF
  //REFERENCE VIA this.state.chosenSeats[0].
  //                                       .seatnum
  //                                       .ticket
  //                                       .price
  state = this.props.location.state;
  componentDidMount(){
   
        console.log(this.state);
        var total = 0;
        var seats = '';
        for (var i = 0; i < this.state.chosenSeats.length; i++) {
          total = total + this.state.chosenSeats[i].price; 
          seats += JSON.stringify(this.state.chosenSeats[i].seatnum)
          
        }
        console.log(total);
        document.getElementById("total").innerText= total; 
       
        Axios.post('http://localhost:8080/total', {
          total: total,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        // Axios.post('http://localhost:8080/tickets',{
        //   seats: JSON.stringify(seats)
        // })
  }

  
  
  render() {
    
    return (

      <StripeProvider apiKey="pk_test_iXkwILOm0dHnfTVPsiDy8Mw0007ohxGCzC">
        <div className="example">
        <TicketForm 
          chosenSeats = {this.state}
          />
           
          <h3>£:</h3>
       
          <h1 id="total">total</h1>
   
          <Elements>
          
          <CheckoutForm 
          chosenSeats = {this.state}/>
          </Elements>
        </div>
        
      </StripeProvider>
      
    );
  }
}

export default Payment;