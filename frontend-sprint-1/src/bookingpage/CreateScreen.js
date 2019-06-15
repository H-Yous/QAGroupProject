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
    chosenSeats= [];
    constructor(props) {
        
        super(props);
        this.state = {
            chart: null,
            chartLoaded: false,
            redirect: false,

        };
      }
    
    componentDidMount(){
        
    }
    booked(chart){
        
        chart.listSelectedObjects((listOfObjects) =>{
            listOfObjects.map((object) => {
                let seatnum = object.label;
                let ticket = object.selectedTicketType;
                let price = object.pricing.ticketTypes.filter(obj => obj.ticketType === ticket)
                    .map((obj) => obj.price)[0];
                this.chosenSeats.push({seatnum, ticket, price});
                if(listOfObjects.indexOf(object) === listOfObjects.length -1){
                    this.handleRedirect(this.chosenSeats);
                }
            })
        })
    }

    handleRedirect(chosenSeats){
        this.props.history.push("/payment", {chosenSeats});
    }

    render(){
        const{publicKey, eventKey, maxObjects} = this.props;
        
        return(
            <div id="event-manager">
                <SeatsioSeatingChart
                    
                    publicKey={this.props.publicKey}
                    event={this.props.eventKey}
                    id='Screen'
                    onRenderStarted={createdChart => {this.setState({chart: createdChart, chartLoaded: true})}}
                    
                    
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
                    
                    
                />
                    <Button onClick={() => {this.booked(this.state.chart)}}>Button</Button>
            </div>
            
            ) 
    };      
}
export default withRouter(ScreenCreation);
 