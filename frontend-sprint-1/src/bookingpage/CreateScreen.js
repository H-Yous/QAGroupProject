import React, { Component } from "react";
import { Button } from "reactstrap";
import { SeatsioSeatingChart } from "@seatsio/seatsio-react";
import { withRouter } from "react-router-dom";
<<<<<<< HEAD
import BookingService from "./BookingService.js";

=======
import BookingService from "./BookingService";
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
/*
USE THIS CLASS WITH the following:
<CreateScreen
eventkey = '1-1-1'
seatnumbers =...
/>
*/

class ScreenCreation extends Component {
  chosenSeats = [];
<<<<<<< HEAD
  token;
  constructor(props) {
    super(props);
    this.state = {
      chart: null,
      chartLoaded: false,
      redirect: false
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
    chart.listSelectedObjects(listOfObjects => {
      listOfObjects.map(object => {
        let seatnum = object.label;
        let ticket = object.selectedTicketType;
        let newtoken = chart.holdToken;
        console.log(object.holdToken);

        let price = object.pricing.ticketTypes
          .filter(obj => obj.ticketType === ticket)
          .map(obj => obj.price)[0];

        this.chosenSeats.push({ seatnum, ticket, price, newtoken });

        if (listOfObjects.indexOf(object) === listOfObjects.length - 1) {
          this.handleRedirect(this.chosenSeats);
        }
      });
    });
    console.log(chart.holdToken);
  }

  handleRedirect(chosenSeats) {
    this.props.history.push("/payment", { chosenSeats });
  }

  render() {
    const { publicKey, eventKey, maxObjects } = this.props;

=======
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

>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
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
<<<<<<< HEAD
                { ticketType: "Adult", price: 10.99 },
                { ticketType: "Child", price: 6.99 },
                { ticketType: "Student", price: 8.99 }
=======
                { ticketType: "Adult", price: this.state.normAdult },
                { ticketType: "Child", price: this.state.normChild },
                { ticketType: "Student", price: this.state.normStudent }
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
              ]
            },
            {
              category: "Premium",
              ticketTypes: [
<<<<<<< HEAD
                { ticketType: "Adult", price: 14.99 },
                { ticketType: "Child", price: 9.99 },
                { ticketType: "Student", price: 12.99 }
=======
                { ticketType: "Adult", price: this.state.premAdult },
                { ticketType: "Child", price: this.state.premChild },
                { ticketType: "Student", price: this.state.premStudent }
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
              ]
            },
            {
              category: "Disabled",
<<<<<<< HEAD
              ticketTypes: [{ ticketTypes: "Disabled", price: 5 }]
=======
              ticketTypes: [
                { ticketTypes: "Disabled", price: this.state.disabled }
              ]
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
            }
          ]}
          priceFormatter={price => "£" + price}
          showLegend={true}
          holdOnSelect={true}
<<<<<<< HEAD
          regenerateHoldToken={true}
          expiresInSeconds={1}
=======
          
          expiresInSeconds={0.01}
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
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
