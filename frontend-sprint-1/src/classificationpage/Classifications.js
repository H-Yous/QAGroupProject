import React, { Component } from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
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
        <h1>Classifications</h1>
        <Jumbo>
          <b>
            <p>
              All film classification decisions are based on the British Board
              of Film Classification's (BBFC) published and regularly updated
              guidelines. For more detailed information about BBFC rulings, and
              for information for parents regarding film classifications and
              their suitability, please visit{" "}
              <a href="http://www.bbfc.co.uk/" target="_blank">
                {" "}
                www.bbfc.co.uk (opens in a new window)
              </a>
            </p>
            <hr />
            <div>
              {" "}
              <img src={uRating} width="100" height="100" />
              <p id="uRating" />
            </div>
            <hr />
            <div>
              {" "}
              <img src={pgRating} width="100" height="100" />
              <p id="pgRating" />
            </div>
            <div>
              <hr /> <img src={twelveaRating} width="100" height="100" />
              <p id="12aRating" />
            </div>
            <hr />
            <div>
              {" "}
              <img src={fifteenRating} width="100" height="100" />
              <p id="15Rating" />
            </div>
            <hr />
            <div>
              {" "}
              <img src={eighteenRating} width="100" height="100" />
              <p id="18Rating" />
            </div>
          </b>
        </Jumbo>
      </React.Fragment>
    );
  }
}

export default Classifications;
