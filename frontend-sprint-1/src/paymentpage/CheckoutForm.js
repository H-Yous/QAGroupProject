import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component{
    constructor(props) {
      super(props);
      this.state = {complete: false};
      this.submit = this.submit.bind(this);
    }

    submit = async (event) => {
    // User clicked submit
      let {token} = await this.props.stripe.createToken({name: "Name"});

      let response = await fetch("http://localhost:8080/charge", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: token.id
    })
    
    if (response.ok) this.setState({complete: true});
   
  }

  render(){
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    
    return (
      
<div className="checkout">
<p>Would you like to complete the purchase?</p>
<CardElement />
<br></br>
<Button variant="primary" size="lg" onClick={this.submit}>Pay Now</Button>
</div>

    );
  }

}

export default injectStripe (CheckoutForm);




