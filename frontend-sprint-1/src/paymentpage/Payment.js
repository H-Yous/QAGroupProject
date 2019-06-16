import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import DetailsForm from './detailsForm';
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
  }
  render() {
    
    return (
      
      
      
      <StripeProvider apiKey="pk_test_iXkwILOm0dHnfTVPsiDy8Mw0007ohxGCzC">
        <div className="example">
        <TicketForm 
          chosenSeats = {this.state}
          />
          <h1>React Stripe Elements</h1>
          
          <DetailsForm />
          <Elements>
          <CheckoutForm />
          </Elements>

          
        </div>
        
      </StripeProvider>
      
    );
  }
}

export default Payment;