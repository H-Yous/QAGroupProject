import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap";
import { Image, View, StyleSheet } from "react-native";

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
                <div class="card">
                  <center>
                    <h1>{newReleasedMovie.title}</h1>
                  </center>
                  <img
                    class="card-img-top"
                    src={newReleasedMovie.poster}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h3 class="card-text">Description</h3>
                    <p class="card-text">{newReleasedMovie.description}</p>
                  </div>

                  <div class="card-body">
                    <h3 class="card-text">Actors</h3>
                    <p class="card-text">{newReleasedMovie.actors}</p>
                  </div>

                  <div class="card-body">
                    <h3 class="card-text">Director</h3>
                    <p class="card-text">{newReleasedMovie.director}</p>
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

export default NewReleasesInfo;
