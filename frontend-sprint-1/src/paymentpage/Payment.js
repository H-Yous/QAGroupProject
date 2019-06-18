import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

import TicketForm from './ticketForm';

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
        for (var i = 0; i < this.state.chosenSeats.length; i++) {
          total = total + this.state.chosenSeats[i].price; 
        }
        console.log(total);
        document.getElementById("total").innerText= total; 
       
  }

  
  render() {
    
    return (

      <StripeProvider apiKey="pk_test_iXkwILOm0dHnfTVPsiDy8Mw0007ohxGCzC">
        <div className="example">
        <TicketForm 
          chosenSeats = {this.state}
          />
          
          <span><h2>£:</h2><h1 id="total">total</h1></span>
          <Elements>
          
          <CheckoutForm />
          </Elements>
        </div>
        
      </StripeProvider>
      
    );
  }
}

export default Payment;