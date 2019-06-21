import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import TicketForm from "./ticketForm.js";
import Axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

class Confirmation extends Component {
  //THIS IS WHERE YOU GET THE CHOSEN SEAT STUFF
  //REFERENCE VIA this.state.chosenSeats[0].
  //                                       .seatnum
  //                                       .ticket
  //                                       .price
  state = this.props.location.state;

  componentDidMount() {
    try {
      {
        console.log(this.state.chosenSeats);
        console.log(JSON.stringify(this.state.chosenSeats));
      }
      var seats = "";
      Axios.get("http://localhost:8080/gettotal").then(res => {
        document.getElementById("total").innerText = res.data;
      });
      Axios.get("http://localhost:8080/getname").then(res => {
        document.getElementById("name").innerText = res.data;
      });

      Axios.get("http://localhost:8080/getemail").then(res => {
        document.getElementById("email").innerText = res.data;
      });
    } catch (e) {}

    try {
      let chosen = JSON.stringify(this.state.chosenSeats);

      Axios.post("http://localhost:8080/booking/createBooking", {
        ticket: this.state.chosenSeats
      });
    } catch (e) {}
  }
  _exportPdf = () => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  render() {
    return (
      <div id="capture">
        <Card style={{ opacity: "0.92" }}>
          <Card.Body>
            <TicketForm chosenSeats={this.state.chosenSeats} />
            <Card.Title>Ticket Confirmation</Card.Title>
            <span>
              <Card.Subtitle id="ref" className="mb-2 text-muted">
                Total £:
                <h1 id="total" />
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Ref : </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Name : <p id="name" />
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Email :<p id="email" />{" "}
              </Card.Subtitle>
            </span>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button onClick={() => this._exportPdf()} variant="primary">
              Save Confirmation
            </Button>
            <Button onClick={() => window.print()} variant="primary">
              Print Confirmation
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Confirmation;
