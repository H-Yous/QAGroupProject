import React, { Component } from "react";
import { Jumbotron as Jumbo, Container, Button, Table } from "react-bootstrap";

import axios from "axios";

import uRating from "../assets/urating.png";
import pgRating from "../assets/pgrating.png";
import twelveaRating from "../assets/12arating.png";
import fifteenRating from "../assets/15rating.png";
import eighteenRating from "../assets/18rating.png";

class Classifications extends Component {
  componentDidMount() {
    var ratingName = new Array(5);
    var ratingDescription = new Array(5);

    axios
      .get("http://localhost:8080/api/getCertifications")
      .then(function(response) {
        for (var i = 0; i < 5; i++) {
          ratingName.push(response.data[i].name);
          ratingDescription.push(response.data[i].description);
        }

        // handle success
        for (var i = 0; i < ratingName.length; i++) {
          if (ratingName[i] == "U") {
            document.getElementById("uRating").innerHTML = ratingDescription[i];
          } else if (ratingName[i] == "PG") {
            document.getElementById("pgRating").innerHTML =
              ratingDescription[i];
          } else if (ratingName[i] == "12A") {
            document.getElementById("12aRating").innerHTML =
              ratingDescription[i];
          } else if (ratingName[i] == "15") {
            document.getElementById("15Rating").innerHTML =
              ratingDescription[i];
          } else if (ratingName[i] == "18") {
            document.getElementById("18Rating").innerHTML =
              ratingDescription[i];
          }
        }
      })
      .catch(function(error) {
        // handle error

        console.log("This is the error");
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  render() {
    return (
      <React.Fragment>
        <Table striped bordered variant="dark" size="sm">
          <h4 style={{ textAlign: "center", justifyContent: "center" }}>
            All film classification decisions are based on regularly updated
            guidelines
            <br /> issued by the{" "}
            <a
              href="https://bbfc.co.uk/what-classification/classification-guidelines"
              target="_blank"
            >
              {" "}
              British Board of Film Classifications
            </a>
            :
          </h4>
        </Table>
        <Table striped bordered variant="dark">
          <tbody>
            <tr>
              <td>
                {" "}
                <img
                  src={uRating}
                  width="100"
                  height="100"
                  style={{ jusitfyContent: "center" }}
                />{" "}
              </td>
              <td>
                <p id="uRating" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={pgRating}
                  width="100"
                  height="100"
                  style={{ jusitfyContent: "center" }}
                />
              </td>
              <td>
                <p id="pgRating" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={twelveaRating}
                  width="100"
                  height="100"
                  style={{ jusitfyContent: "center" }}
                />
              </td>
              <td>
                <p id="12aRating" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={fifteenRating}
                  width="100"
                  height="100"
                  style={{ jusitfyContent: "center" }}
                />
              </td>
              <td>
                <p id="15Rating" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={eighteenRating}
                  width="100"
                  height="100"
                  style={{ jusitfyContent: "center" }}
                />
              </td>
              <td>
                <p id="18Rating" />
              </td>
            </tr>
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default Classifications;
