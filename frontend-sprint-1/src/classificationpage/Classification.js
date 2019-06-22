import React, { Component } from "react";
import { Jumbotron as Jumbo, Container, Button, Table } from "react-bootstrap";

import axios from "axios";

import uRating from "../assets/rating/urating.png";
import pgRating from "../assets/rating/pgrating.png";
import twelveaRating from "../assets/rating/12arating.png";
import fifteenRating from "../assets/rating/15rating.png";
import eighteenRating from "../assets/rating/18rating.png";
import r18rating from "../assets/rating/r18rating.png";

class Classification extends Component {
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
                  <a
                    href="https://bbfc.co.uk/what-classification/u"
                    target="_blank"
                    alt="Universal"
                  >
                    <img
                      src={uRating}
                      width="100"
                      height="100"
                      style={{ jusitfyContent: "center" }}
                    />{" "}
                  </a>
                </td>
                <td>
                  <p id="uRating" />
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://bbfc.co.uk/what-classification/pg"
                    target="_blank"
                    alt="Parental Guidance"
                  >
                    <img
                      src={pgRating}
                      width="100"
                      height="100"
                      style={{ jusitfyContent: "center" }}
                    />
                  </a>
                </td>
                <td>
                  <p id="pgRating" />
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://bbfc.co.uk/what-classification/12a-and-12"
                    target="_blank"
                    alt="12A"
                  >
                    <img
                      src={twelveaRating}
                      width="100"
                      height="100"
                      style={{ jusitfyContent: "center" }}
                    />
                  </a>
                </td>
                <td>
                  <p id="12aRating" />
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://bbfc.co.uk/what-classification/15"
                    target="_blank"
                    alt="15"
                  >
                    <img
                      src={fifteenRating}
                      width="100"
                      height="100"
                      style={{ jusitfyContent: "center" }}
                    />
                  </a>
                </td>
                <td>
                  <p id="15Rating" />
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://bbfc.co.uk/what-classification/18"
                    target="_blank"
                    alt="18"
                  >
                    <img
                      src={eighteenRating}
                      width="100"
                      height="100"
                      style={{ jusitfyContent: "center" }}
                    />
                  </a>
                </td>
                <td>
                  <p id="18Rating" />
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://bbfc.co.uk/what-classification/r18"
                    target="_blank"
                    alt="Restricted"
                  >
                    <img
                      src={r18rating}
                      width="100"
                      height="80"
                      style={{ jusitfyContent: "center" }}
                    />
                  </a>
                </td>
                <td>
                  The R18 category is a special and legally-restricted
                  classification primarily for explicit works of consenting sex
                  or strong fetish material involving adults. Films may only be
                  shown to adults in specially licensed cinemas, and video works
                  may be supplied to adults only in licensed sex shops. R18
                  video works may not be supplied by mail order.
                  <br />
                  <br />
                  We do not allow for R18 films to be viewed on our premises.
                </td>
              </tr>
            </tbody>
          </Table>
        </Table>
      </React.Fragment>
    );
  }
}

export default Classification;
