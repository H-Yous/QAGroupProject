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

class NewReleasesInfo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    newReleasedMovies: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/getNewReleasedMovies").then(result => {
      this.setState({ newReleasedMovies: result.data });
    });
  }

  render() {
    const currentUrl = decodeURI(window.location.href);
    const selectedMovieName = currentUrl.substring(
      currentUrl.lastIndexOf("/") + 1
    );

    return (
      <React.Fragment>
        {this.state.newReleasedMovies.map(
          (newReleasedMovie, index, moviesArray) => {
            if (newReleasedMovie.title === selectedMovieName) {
              return (
                <React.Fragment>
                  <Table striped bordered variant="light">
                    <Table striped bordered variant="dark">
                      <center>
                        <h2>
                          <b>{newReleasedMovie.title}</b>
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
                          <div>
                            <img
                              src={newReleasedMovie.altPoster}
                              width={525}
                              height={317}
                            />

                            <div style={{ textAlign: "justify" }}>
                              <br />
                              {newReleasedMovie.description}
                            </div>
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
                            <div>
                              <b>
                                <i>Starring</i>
                              </b>
                              <br />
                              <p>{newReleasedMovie.actors}</p>
                              <b>
                                <i>Director</i>
                              </b>
                              <br />
                              <p>{newReleasedMovie.director}</p>
                              <br />
                              {(() => {
                                if (newReleasedMovie.certification == "U") {
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
                                  newReleasedMovie.certification == "PG"
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
                                  newReleasedMovie.certification == "12" ||
                                  newReleasedMovie.certification == "12A"
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
                                  newReleasedMovie.certification == "15"
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
                                  newReleasedMovie.certification == "18"
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
                            </div>
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

export default NewReleasesInfo;
