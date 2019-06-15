import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import DetailsForm from './detailsForm';

class Payment extends Component {
  stat = this.props.location.state;
  componentDidMount(){
        console.log(this.stat);
  }
  render() {
    
    return (
      
      
      
      <StripeProvider apiKey="pk_test_iXkwILOm0dHnfTVPsiDy8Mw0007ohxGCzC">
        <div className="example">
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