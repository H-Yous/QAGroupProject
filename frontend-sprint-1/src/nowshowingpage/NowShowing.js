import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

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
      return "9:15-11:45";
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
  handleRedirectBooking(title, eventKey) {
    this.props.history.push("/booking", { title, eventKey });
  }

  render() {
    console.log(this.state.nowShowingMovies[0]);
    return (
      <React.Fragment>
        {this.state.nowShowingMovies.map(
          (nowShowingMovie, index, moviesArray) => {
            if ((index + 1) % 3 === 1) {
              return (
                <div className="row">
                  <div className="col">
                    <div className="card-deck">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={nowShowingMovie.poster}
                          alt="Card image cap"
                        />
                        <div className="card-body d-flex flex-column">
                          <Link style={{ textDecoration: "none" }}>
                            <h5
                              style={{ color: "black" }}
                              onClick={() => {
                                this.handleRedirect(nowShowingMovie.title);
                              }}
                              className="card-title"
                            >
                              {nowShowingMovie.title}
                            </h5>
                          </Link>
                          <p className="card-text">
                            {nowShowingMovie.description}
                          </p>
                          <div class="mt-auto">
                            <p>
                              <small className="text-muted">
                                {nowShowingMovie.runtime} mins
                              </small>
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
                            <div>
                              {nowShowingMovie.events.map(event => {
                                return (
                                  <React.Fragment>
                                    <div style={{ padding: 5 }}>
                                      <button
                                        type="button"
                                        class="btn btn-primary btn-sm"
                                        style={{ paddingBottom: 5 }}
                                        onClick={() => {
                                          this.handleRedirectBooking(
                                            nowShowingMovie.title,
                                            event.eventKey
                                          );
                                        }}
                                      >
                                        {event.day}
                                        {" : "}
                                        {this.enumTimeSlotConverter(
                                          event.timeSlot
                                        )}
                                      </button>
                                      <br />
                                    </div>
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      {(() => {
                        if (typeof moviesArray[index + 1] != "undefined") {
                          return (
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={
                                  this.state.nowShowingMovies[index + 1].poster
                                }
                                alt="Card image cap"
                              />
                              <div className="card-body d-flex flex-column">
                                <Link style={{ textDecoration: "none" }}>
                                  <h5
                                    style={{ color: "black" }}
                                    onClick={() => {
                                      this.handleRedirect(
                                        this.state.nowShowingMovies[index + 1]
                                          .title
                                      );
                                    }}
                                    className="card-title"
                                  >
                                    {
                                      this.state.nowShowingMovies[index + 1]
                                        .title
                                    }
                                  </h5>
                                </Link>
                                <p className="card-text">
                                  {
                                    this.state.nowShowingMovies[index + 1]
                                      .description
                                  }
                                </p>
                                <div class="mt-auto">
                                  {" "}
                                  <p>
                                    <small className="text-muted">
                                      {
                                        this.state.nowShowingMovies[index + 1]
                                          .runtime
                                      }{" "}
                                      mins
                                    </small>
                                  </p>
                                  {(() => {
                                    if (
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "U"
                                    ) {
                                      return (
                                        <a
                                          href="https://bbfc.co.uk/what-classification/u"
                                          target="_blank"
                                          alt="Universal"
                                        >
                                          <img
                                            src={uRating}
                                            height="50"
                                            width="50"
                                          />
                                        </a>
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "PG"
                                    ) {
                                      return (
                                        <a
                                          href="https://bbfc.co.uk/what-classification/pg"
                                          target="_blank"
                                          alt="Parental Guidance"
                                        >
                                          <img
                                            src={pgRating}
                                            height="50"
                                            width="50"
                                          />
                                        </a>
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "12" ||
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "12A"
                                    ) {
                                      return (
                                        <a
                                          href="https://bbfc.co.uk/what-classification/12a-and-12"
                                          target="_blank"
                                          alt="12A"
                                        >
                                          <img
                                            src={twelveaRating}
                                            height="50"
                                            width="50"
                                          />
                                        </a>
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "15"
                                    ) {
                                      return (
                                        <a
                                          href="https://bbfc.co.uk/what-classification/15"
                                          target="_blank"
                                          alt="15"
                                        >
                                          <img
                                            src={fifteenRating}
                                            height="50"
                                            width="50"
                                          />
                                        </a>
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "18"
                                    ) {
                                      return (
                                        <a
                                          href="https://bbfc.co.uk/what-classification/18"
                                          target="_blank"
                                          alt="18"
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
                                        <img
                                          src={tbcRating}
                                          height="50"
                                          width="50"
                                        />
                                      );
                                    }
                                  })()}
                                  <div>
                                    {nowShowingMovie.events.map(event => {
                                      return (
                                        <React.Fragment>
                                          <div style={{ padding: 5 }}>
                                            <button
                                              type="button"
                                              class="btn btn-primary btn-sm"
                                              style={{ paddingBottom: 5 }}
                                              onClick={() => {
                                                this.handleRedirectBooking(
                                                  nowShowingMovie.title,
                                                  event.eventKey
                                                );
                                              }}
                                            >
                                              {event.day}
                                              {" : "}
                                              {this.enumTimeSlotConverter(
                                                event.timeSlot
                                              )}
                                            </button>
                                            <br />
                                          </div>
                                        </React.Fragment>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })()}
                      {(() => {
                        if (typeof moviesArray[index + 2] != "undefined") {
                          return (
                            <div className="card">
                              <img
                                className="card-img-top"
                                src={
                                  this.state.nowShowingMovies[index + 2].poster
                                }
                                alt="Card image cap"
                              />
                              <div className="card-body d-flex flex-column">
                                <Link style={{ textDecoration: "none" }}>
                                  <h5
                                    style={{ color: "black" }}
                                    onClick={() => {
                                      this.handleRedirect(
                                        this.state.nowShowingMovies[index + 2]
                                          .title
                                      );
                                    }}
                                    className="card-title"
                                  >
                                    {
                                      this.state.nowShowingMovies[index + 2]
                                        .title
                                    }
                                  </h5>
                                </Link>
                                <p className="card-text">
                                  {
                                    this.state.nowShowingMovies[index + 2]
                                      .description
                                  }
                                </p>
                                <div class="mt-auto">
                                  <p>
                                    <small className="text-muted">
                                      {
                                        this.state.nowShowingMovies[index + 2]
                                          .runtime
                                      }{" "}
                                      mins
                                    </small>
                                  </p>

                                  {(() => {
                                    if (
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "U"
                                    ) {
                                      return (
                                        <a
                                          href="https://bbfc.co.uk/what-classification/u"
                                          target="_blank"
                                          alt="Universal"
                                        >
                                          <img
                                            src={uRating}
                                            height="50"
                                            width="50"
                                          />
                                        </a>
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "PG"
                                    ) {
                                      return (
                                        <a
                                          href="https://bbfc.co.uk/what-classification/pg"
                                          target="_blank"
                                          alt="Parental Guidance"
                                        >
                                          <img
                                            src={pgRating}
                                            height="50"
                                            width="50"
                                          />
                                        </a>
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "12" ||
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "12A"
                                    ) {
                                      return (
                                        <a
                                          href="https://bbfc.co.uk/what-classification/12a-and-12"
                                          target="_blank"
                                          alt="12A"
                                        >
                                          <img
                                            src={twelveaRating}
                                            height="50"
                                            width="50"
                                          />
                                        </a>
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "15"
                                    ) {
                                      return (
                                        <a
                                          href="https://bbfc.co.uk/what-classification/15"
                                          target="_blank"
                                          alt="15"
                                        >
                                          <img
                                            src={fifteenRating}
                                            height="50"
                                            width="50"
                                          />
                                        </a>
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "18"
                                    ) {
                                      return (
                                        <a
                                          href="https://bbfc.co.uk/what-classification/18"
                                          target="_blank"
                                          alt="18"
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
                                        <img
                                          src={tbcRating}
                                          height="50"
                                          width="50"
                                        />
                                      );
                                    }
                                  })()}
                                  <div>
                                    {nowShowingMovie.events.map(event => {
                                      return (
                                        <React.Fragment>
                                          <div style={{ padding: 5 }}>
                                            <button
                                              type="button"
                                              class="btn btn-primary btn-sm"
                                              style={{ paddingBottom: 5 }}
                                              onClick={() => {
                                                this.handleRedirectBooking(
                                                  nowShowingMovie.title[
                                                    index + 2
                                                  ],
                                                  event.eventKey
                                                );
                                              }}
                                            >
                                              {event.day}
                                              {" : "}
                                              {this.enumTimeSlotConverter(
                                                event.timeSlot
                                              )}
                                            </button>
                                            <br />
                                          </div>
                                        </React.Fragment>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })()}
                    </div>
                  </div>
                </div>
              );
            }
          }
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(NowShowing);
