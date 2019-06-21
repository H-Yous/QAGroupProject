import React, { Component } from "react";
import CreateScreen from "./CreateScreen.js";
import { Table } from "react-bootstrap";
import { Button } from "reactstrap";
import { SeatsioSeatingChart } from "@seatsio/seatsio-react";
import { withRouter } from "react-router-dom";
import BookingService from "./BookingService";

class BookingChart extends Component {
  chosenSeats = [];

  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      chart: null,
      chartLoaded: false,
      redirect: false,
      pricing: {
        normAdult: 12,
        normChild: 8,
        normStudent: 10,
        premAdult: 14,
        premChild: 10,
        premStudent: 12,
        disabled: 5
      }
    };
  }
  componentDidMount() {}
  booked(chart) {
    this.movie = this.props.location.state.title;
    chart.listSelectedObjects(listOfObjects => {
      listOfObjects.map(object => {
        let seat = object.label;
        let type = object.selectedTicketType;
        let token = chart.holdToken;
        let title = this.movie;

        let price = object.pricing.ticketTypes
          .filter(obj => obj.ticketType === type)
          .map(obj => obj.price)[0];
        this.chosenSeats.push({ title, seat, type, price, token });
        console.log(chart.holdToken);
        if (listOfObjects.indexOf(object) === listOfObjects.length - 1) {
          this.handleRedirect(this.chosenSeats);
          console.log(this.chosenSeats);
        }
      });
    });
  }
  handleRedirect(chosenSeats) {
    this.props.history.push(
      "/payment",
      {
      chosenSeats,
      this.props.location.state.eventKey
      }
    );
  }

  render() {
    return (
      <div id="venue_map" class>
        <Table striped borderless variant="light" size="sm">
          <tr>
            <h3>
              <center>{this.props.location.state.eventKey}</center>
            </h3>
          </tr>
          <tr>
            {" "}
            <div id="event-manager">
              <SeatsioSeatingChart
                publicKey="254e39d5-d1cd-4d23-bc63-ae26cc602338"
                event={this.props.location.state.eventKey}
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
                      { ticketType: "Adult", price: 12 },
                      { ticketType: "Child", price: 8 },
                      { ticketType: "Student", price: 10 }
                    ]
                  },
                  {
                    category: "Premium",
                    ticketTypes: [
                      { ticketType: "Adult", price: 14 },
                      { ticketType: "Child", price: 10 },
                      { ticketType: "Student", price: 12 }
                    ]
                  },
                  {
                    category: "Disabled",
                    ticketTypes: [{ ticketType: "Disabled", price: 5 }]
                  }
                ]}
                priceFormatter={price => "£" + price}
                showLegend={true}
                holdOnSelect={true}
                expiresInSeconds={0.01}
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
          </tr>
        </Table>
      </div>
    );
  }
}
export default withRouter(BookingChart);
