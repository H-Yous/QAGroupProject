import React, { Component } from "react";
import { Button } from "reactstrap";
import { SeatsioSeatingChart } from "@seatsio/seatsio-react";
import { withRouter } from "react-router-dom";
import BookingService from "./BookingService";
/*
USE THIS CLASS WITH the following:
<CreateScreen
eventkey = '1-1-1'
seatnumbers =...
/>
*/

class ScreenCreation extends Component {
  chosenSeats = [];
  // token;
  

  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      chart: null,
      chartLoaded: false,
      redirect: false,
      pricing: {
        normAdult: '',
        normChild: '',
        normStudent: '',
        premAdult: '',
        premChild: '',
        premStudent: '',
        disabled: ''
      }
    };
    
  }

  componentDidMount() {
    BookingService.getPricingInformation()
      .then(response => {
        this.setState({
          normAdult: response.data[0],
          normChild: response.data[1],
          normStudent: response.data[2],
          premAdult: response.data[3],
          premChild: response.data[4],
          premStudent: response.data[5],
          disabled: response.data[6]
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  booked(chart) {
    this.movie = this.props.movie;
    chart.listSelectedObjects(listOfObjects => {
      listOfObjects.map(object => {
        let seatnum = object.label;
        let ticket = object.selectedTicketType;
        let newtoken = chart.holdToken;
        let movieTitle = this.movie;

        let price = object.pricing.ticketTypes
          .filter(obj => obj.ticketType === ticket)
          .map(obj => obj.price)[0];
        this.chosenSeats.push({ movieTitle, seatnum, ticket, price, newtoken });
        console.log(chart.holdToken);
        if (listOfObjects.indexOf(object) === listOfObjects.length - 1) {
          this.handleRedirect(this.chosenSeats);
          console.log(this.chosenSeats);
        }
      });
    });
    
  }
  handleRedirect(chosenSeats) {
    
    this.props.history.push("/payment", chosenSeats);
    
  }

  render() {
    const { publicKey, eventKey, maxObjects, movie } = this.props;

    return (
      <div id="event-manager">
        <SeatsioSeatingChart
          publicKey={this.props.publicKey}
          event={this.props.eventKey}
          id="Screen"
          onRenderStarted={createdChart => {
            this.setState({
              chart: createdChart,
              token: createdChart.token,
              chartLoaded: true
            });
          }}
          pricing={[
            {
              category: "Normal",
              ticketTypes: [
                { ticketType: "Adult", price: this.state.normAdult },
                { ticketType: "Child", price: this.state.normChild },
                { ticketType: "Student", price: this.state.normStudent }
              ]
            },
            {
              category: "Premium",
              ticketTypes: [
                { ticketType: "Adult", price: this.state.premAdult },
                { ticketType: "Child", price: this.state.premChild },
                { ticketType: "Student", price: this.state.premStudent }
              ]
            },
            {
              category: "Disabled",
              ticketTypes: [
                { ticketTypes: "Disabled", price: this.state.disabled }
              ]
            }
          ]}
          priceFormatter={price => "£" + price}
          showLegend={true}
          holdOnSelect={true}
          regenerateHoldToken={true}
          expiresInSeconds={1}
          maxSelectedObjects={this.props.maxObjects}
        />
        <Button
          onClick={() => {
            this.booked(this.state.chart);
          }}
        >
          Button
        </Button>
      </div>
    );
  }
}
export default withRouter(ScreenCreation);
