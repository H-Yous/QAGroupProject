import React, { Component } from 'react';
import { Card,Button } from 'react-bootstrap';

import TicketForm from './ticketForm';
import Axios from 'axios';

class Confirmation extends Component {
     //THIS IS WHERE YOU GET THE CHOSEN SEAT STUFF
  //REFERENCE VIA this.state.chosenSeats[0].
  //                                       .seatnum
  //                                       .ticket
  //                                       .price
  //state = this.props.location.state;

  componentDidMount(){

  }


    render() {

        return(
            <Card>
            <Card.Body>
            {/* <TicketForm 
          chosenSeats = {this.state}
          /> */}
              <Card.Title>Ticket Confirmation</Card.Title>
              <span>
                  <Card.Subtitle className="mb-2 text-muted">Ref : </Card.Subtitle> 
                  <Card.Subtitle id="ref" className="mb-2 text-muted">Null</Card.Subtitle>
              </span>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Email Confirmation</Button> 
              <Button onClick={() => window.print()} variant="primary">Print Confirmation</Button>
            </Card.Body>
          </Card>
        );
        
    }
}

export default Confirmation;