import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Table } from "react-bootstrap";

import uRating from "../assets/rating/urating.png";
import pgRating from "../assets/rating/pgrating.png";
import twelveaRating from "../assets/rating/12arating.png";
import fifteenRating from "../assets/rating/15rating.png";
import eighteenRating from "../assets/rating/18rating.png";
import tbcRating from "../assets/rating/tbcrating.png";

class NowShowing extends Component {
  state = {
    nowShowingMovies: []
  };

  enumTimeSlotConverter(enumInput) {
    if (enumInput == "FIRSTSLOT") {
      return "09:15-11:45";
    } else if (enumInput == "SECONDSLOT") {
      return "12:30-14:45";
    } else if (enumInput == "THIRDSLOT") {
      return "15:00-17:15";
    } else if (enumInput == "FOURTHSLOT") {
      return "18:00-20:15";
    } else {
      return "20:45-22:00";
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/getNowShowingMovies").then(result => {
      this.setState({ nowShowingMovies: result.data });
    });
  }

  handleRedirect(movieName) {
    this.props.history.push("/nowShowingInfo/" + movieName, { movieName });
  }
  handleRedirectBooking(movie, eventKey) {
    this.props.history.push("/booking", { movie, eventKey });
  }

  render() {
    console.log(this.state.nowShowingMovies[0]);
    return (
      <React.Fragment>
        {this.state.nowShowingMovies.map(
          (nowShowingMovie, index, moviesArray) => {
            return (
              <div className="row">
                <div className="col">
                  <div className="card-deck">
                    <Table striped borderless variant="dark">
                      <tr>
                        <td>
                          <img
                            className="card-img-top"
                            src={nowShowingMovie.poster}
                            style={{ width: 500, height: 300 }}
                            alt="Card image cap"
                          />
                          <div style={{ textAlign: "center" }}>
                            <Link style={{ textDecoration: "none" }}>
                              <h3
                                style={{ color: "white" }}
                                onClick={() => {
                                  this.handleRedirect(nowShowingMovie.title);
                                }}
                                className="card-title"
                              >
                                {nowShowingMovie.title}
                              </h3>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <p className="card-text">
                            {nowShowingMovie.description}
                          </p>
                          <div class="mt-auto">
                            <p>
                              <small>{nowShowingMovie.runtime} mins</small>
                            </p>
                            {(() => {
                              if (nowShowingMovie.certification == "U") {
                                return (
                                  <a
                                    href="https://bbfc.co.uk/what-classification/u"
                                    target="_blank"
                                    alt="Universal"
                                  >
                                    <img src={uRating} height="50" width="50" />
                                  </a>
                                );
                              } else if (
                                nowShowingMovie.certification == "PG"
                              ) {
                                return (
                                  <a
                                    href="https://bbfc.co.uk/what-classification/pg"
                                    target="_blank"
                                    alt="Universal"
                                  >
                                    <img
                                      src={pgRating}
                                      height="50"
                                      width="50"
                                    />
                                  </a>
                                );
                              } else if (
                                nowShowingMovie.certification == "12" ||
                                nowShowingMovie.certification == "12A"
                              ) {
                                return (
                                  <a
                                    href="https://bbfc.co.uk/what-classification/12a-and-12"
                                    target="_blank"
                                    alt="Universal"
                                  >
                                    <img
                                      src={twelveaRating}
                                      height="50"
                                      width="50"
                                    />
                                  </a>
                                );
                              } else if (
                                nowShowingMovie.certification == "15"
                              ) {
                                return (
                                  <a
                                    href="https://bbfc.co.uk/what-classification/15"
                                    target="_blank"
                                    alt="Universal"
                                  >
                                    <img
                                      src={fifteenRating}
                                      height="50"
                                      width="50"
                                    />
                                  </a>
                                );
                              } else if (
                                nowShowingMovie.certification == "18"
                              ) {
                                return (
                                  <a
                                    href="https://bbfc.co.uk/what-classification/18"
                                    target="_blank"
                                    alt="Universal"
                                  >
                                    <img
                                      src={eighteenRating}
                                      height="50"
                                      width="50"
                                    />
                                  </a>
                                );
                              } else {
                                return (
                                  <img src={tbcRating} height="50" width="50" />
                                );
                              }
                            })()}
                          </div>
                          <div>
                            <br />
                            {nowShowingMovie.events.map(event => {
                              return (
                                <React.Fragment>
                                  <span
                                    style={{ padding: 2, textAlign: "center" }}
                                  >
                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm"
                                      onClick={() => {
                                        this.handleRedirectBooking(
                                          event.movie,
                                          event.eventKey
                                        );
                                      }}
                                    >
                                      {event.day}
                                      <br />
                                      {this.enumTimeSlotConverter(
                                        event.timeSlot
                                      )}
                                    </button>
                                  </span>
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(NowShowing);
