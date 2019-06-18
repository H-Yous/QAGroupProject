import React, {Component} from 'react';
import { Form, Col} from 'react-bootstrap';
import styled from 'styled-components'; 


const Border = styled.form`
    border:solid 1px grey;

`;


class ticketForm extends Component{
    chosen = [];
    
    constructor(props) {
        
        super(props);
        
        this.chosen = this.props.chosenSeats;
        console.log(this.chosen)
        this.state = {
            
            seats: this.chosen.seatnum,
            tickets: this.chosen.ticket,
            price: this.chosen.price,
            

            numOfSeats: Object.keys(this.chosen).length
            
        };
      }

    renderFormRow(x){
        console.log(x.seatnum);
        return(
            <Form.Row>
                <Col>{x.seatnum}</Col>
                <Col>{x.ticket}</Col>
                <Col>£{x.price}</Col>
            </Form.Row>
            
           
           
           
        )
    }

    renderCreate(){
        
        return this.chosen.chosenSeats.map((x) => this.renderFormRow(x)); 
        
    }

    render(){
        
          return(

            <Border>
            <Form>
            <center>
                    <Form.Row>
                        
                        <Col><b>Seat</b></Col>
                        <Col><b>Ticket</b></Col>
                        <Col><b>Price</b></Col>
                        
                    </Form.Row>
                
                    
                

                {this.renderCreate()}
                </center>
            </Form>
            </Border>
            
          )
    }
}

export default ticketForm;
