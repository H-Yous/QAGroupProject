import React, {Component} from 'react';
import { Button } from 'reactstrap';
import { SeatsioSeatingChart } from '@seatsio/seatsio-react';

import { withRouter } from "react-router-dom";




/*
USE THIS CLASS WITH the following:
<CreateScreen
eventkey = '1-1-1'
seatnumbers =...
/>
*/



class ScreenCreation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chart: null,
            chartLoaded: false};
      }
    
    componentDidMount(){
        
    }

    if(chartLoaded){
        console.log("lol");
    }
    
    
    render(){
        const{publicKey, eventKey, maxObjects} = this.props;
        
        
        return(
            <div id="event-manager">
                <SeatsioSeatingChart
                    //divId="event-manager"
                    publicKey={this.props.publicKey}
                    event={this.props.eventKey}
                    id='Screen'
                    onRenderStarted={createdChart => {this.setState({chart: createdChart, chartLoaded: true})}}
                    //WHAT PRINTS TO THE CONSOLE HERE SHOULD PRINT ABOVE
                    
                    pricing={[
                        {'category' : 'Normal', 'ticketTypes':[
                            {'ticketType' : 'Adult', 'price': 10.99},
                            {'ticketType' : 'Child', 'price': 6.99},
                            {'ticketType' : 'Student', 'price': 8.99}
                        ]},
                        {'category' : 'Premium', 'ticketTypes':[
                            {'ticketType' : 'Adult', 'price': 14.99},
                            {'ticketType' : 'Child', 'price': 9.99},
                            {'ticketType' : 'Student', 'price': 12.99}
                        ]},
                        {'category' : 'Disabled', 'ticketTypes':[
                            {'ticketTypes' : 'Disabled', 'price': 5}
                        ]}
                    ]}
                    priceFormatter={price => '£' + price}
                    showLegend={true}
                    holdOnSelect={true}
                    expiresInSeconds={1}
                    maxSelectedObjects={this.props.maxObjects}
                    
                    selectedObjectsInputName={'chosenSeats'}
                />
                
               
                
                    <Button onClick={() => {this.booked(this.state.chart)}}>Button</Button>

                
            </div>
            
            ) 
            
            
    };
    booked(chart){
        let screen = document.getElementById('Screen');
        chart.listSelectedObjects((listOfObjects) =>{
            listOfObjects.map((object) => {
                let seatnum = object.label;
                let ticket = object.selectedTicketType;
                let price = object.pricing.ticketTypes.filter(obj => obj.ticketType === ticket)
                    .map((obj) => obj.price)[0];
                    console.log(seatnum, ticket, price);
                    console.log(chart);
            })

            
        })
        
    }
    
    
}

export default ScreenCreation;
 