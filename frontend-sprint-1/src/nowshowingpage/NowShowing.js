import React, { Component } from "react";
import axios from "axios";
import { thisTypeAnnotation, thisExpression } from "@babel/types";

import uRating from "../assets/urating.png";
import pgRating from "../assets/pgrating.png";
import twelveaRating from "../assets/12arating.png";
import fifteenRating from "../assets/15rating.png";
import eighteenRating from "../assets/18rating.png";
import tbcRating from "../assets/tbcrating.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class NowShowing extends Component {
  state = {
    nowShowingMovies: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/getNowShowingMovies").then(result => {
      console.log(result.data.title);
      this.setState({ nowShowingMovies: result.data });
    });
  }

  handleRedirect(movieName) {
    this.props.history.push("/nowShowingInfo/" + movieName, { movieName });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Now Showing</h1>
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
                                  <img
                                    class="card-img-bottom"
                                    src={uRating}
                                    height="50"
                                    width="50"
                                  />
                                );
                              } else if (
                                nowShowingMovie.certification == "PG"
                              ) {
                                return (
                                  <img src={pgRating} height="50" width="50" />
                                );
                              } else if (
                                nowShowingMovie.certification == "12" ||
                                nowShowingMovie.certification == "12A"
                              ) {
                                return (
                                  <img
                                    src={twelveaRating}
                                    height="50"
                                    width="50"
                                  />
                                );
                              } else if (
                                nowShowingMovie.certification == "15"
                              ) {
                                return (
                                  <img
                                    src={fifteenRating}
                                    height="50"
                                    width="50"
                                  />
                                );
                              } else if (
                                nowShowingMovie.certification == "18"
                              ) {
                                return (
                                  <img
                                    src={eighteenRating}
                                    height="50"
                                    width="50"
                                  />
                                );
                              } else {
                                return (
                                  <img src={tbcRating} height="50" width="50" />
                                );
                              }
                            })()}
                            <div class="mt-2">
                              <button
                                type="button"
                                class="btn btn-primary btn-sm"
                              >
                                10:00
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary btn-sm ml-2"
                              >
                                13:00
                              </button>
                            </div>
                            <div class="mt-2">
                              <button
                                type="button"
                                class="btn btn-primary btn-sm"
                              >
                                16:00
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary btn-sm ml-2"
                              >
                                19:00
                              </button>

                              <button
                                type="button"
                                class="btn btn-primary btn-sm ml-2"
                              >
                                22:00
                              </button>
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
                                        <img
                                          src={uRating}
                                          height="50"
                                          width="50"
                                        />
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "PG"
                                    ) {
                                      return (
                                        <img
                                          src={pgRating}
                                          height="50"
                                          width="50"
                                        />
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "12" ||
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "12A"
                                    ) {
                                      return (
                                        <img
                                          src={twelveaRating}
                                          height="50"
                                          width="50"
                                        />
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "15"
                                    ) {
                                      return (
                                        <img
                                          src={fifteenRating}
                                          height="50"
                                          width="50"
                                        />
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 1]
                                        .certification == "18"
                                    ) {
                                      return (
                                        <img
                                          src={eighteenRating}
                                          height="50"
                                          width="50"
                                        />
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
                                  <div class="mt-2">
                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm"
                                    >
                                      10:00
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm ml-2"
                                    >
                                      13:00
                                    </button>
                                  </div>
                                  <div class="mt-2">
                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm"
                                    >
                                      16:00
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm ml-2"
                                    >
                                      19:00
                                    </button>

                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm ml-2"
                                    >
                                      22:00
                                    </button>
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
                                        <img
                                          src={uRating}
                                          height="50"
                                          width="50"
                                        />
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "PG"
                                    ) {
                                      return (
                                        <img
                                          src={pgRating}
                                          height="50"
                                          width="50"
                                        />
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "12" ||
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "12A"
                                    ) {
                                      return (
                                        <img
                                          src={twelveaRating}
                                          height="50"
                                          width="50"
                                        />
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "15"
                                    ) {
                                      return (
                                        <img
                                          src={fifteenRating}
                                          height="50"
                                          width="50"
                                        />
                                      );
                                    } else if (
                                      this.state.nowShowingMovies[index + 2]
                                        .certification == "18"
                                    ) {
                                      return (
                                        <img
                                          src={eighteenRating}
                                          height="50"
                                          width="50"
                                        />
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
                                  <div class="mt-2">
                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm"
                                    >
                                      10:00
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm ml-2"
                                    >
                                      13:00
                                    </button>
                                  </div>
                                  <div class="mt-2">
                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm"
                                    >
                                      16:00
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm ml-2"
                                    >
                                      19:00
                                    </button>

                                    <button
                                      type="button"
                                      class="btn btn-primary btn-sm ml-2"
                                    >
                                      22:00
                                    </button>
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
