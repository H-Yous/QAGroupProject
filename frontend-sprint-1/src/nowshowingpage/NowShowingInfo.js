import React, { Component } from "react";
import axios from "axios";
import { View } from "react-native";
import { Table } from "react-bootstrap";
import uRating from "../assets/rating/urating.png";
import pgRating from "../assets/rating/pgrating.png";
import twelveaRating from "../assets/rating/12arating.png";
import fifteenRating from "../assets/rating/15rating.png";
import eighteenRating from "../assets/rating/18rating.png";
import tbcRating from "../assets/rating/tbcrating.png";

class NowShowingInfo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    nowShowingMovies: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/getNowShowingMovies").then(result => {
      this.setState({ nowShowingMovies: result.data });
    });
  }
  render() {
    const currentUrl = decodeURI(window.location.href);
    const selectedMovieName = currentUrl.substring(
      currentUrl.lastIndexOf("/") + 1
    );
    return (
      <React.Fragment>
        {this.state.nowShowingMovies.map(
          (nowShowingMovies, index, moviesArray) => {
            if (nowShowingMovies.title === selectedMovieName) {
              return (
                <React.Fragment>
                  <Table striped bordered variant="light">
                    <Table striped bordered variant="dark">
                      <center>
                        <h2>
                          <b>{nowShowingMovies.title}</b>
                        </h2>
                      </center>
                    </Table>
                    <Table striped bordered variant="dark">
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          padding: 10
                        }}
                      >
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            padding: 10
                          }}
                        >
                          <img
                            src={nowShowingMovies.poster}
                            width={525}
                            height={317}
                          />

                          <div style={{ textAlign: "justify" }}>
                            <br />
                            {nowShowingMovies.description}
                          </div>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            padding: 10
                          }}
                        >
                          <div>
                            <b>
                              <i>Starring</i>
                            </b>
                            <br />
                            <p>{nowShowingMovies.actors}</p>
                            <b>
                              <i>Director</i>
                            </b>
                            <br />
                            <p>{nowShowingMovies.director}</p>
                            <br />
                            <br />
                            {(() => {
                              if (nowShowingMovies.certification == "U") {
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
                                nowShowingMovies.certification == "PG"
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
                                nowShowingMovies.certification == "12" ||
                                nowShowingMovies.certification == "12A"
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
                                nowShowingMovies.certification == "15"
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
                                nowShowingMovies.certification == "18"
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
                                  <img src={tbcRating} height="50" width="50" />
                                );
                              }
                            })()}
                            <p>
                              <small className="text-muted">
                                {nowShowingMovies.runtime} mins
                              </small>
                            </p>
                          </div>
                        </View>
                      </View>
                    </Table>
                  </Table>
                </React.Fragment>
              );
            }
          }
        )}
      </React.Fragment>
    );
  }
}

export default NowShowingInfo;
