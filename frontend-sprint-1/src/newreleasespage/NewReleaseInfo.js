import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap";
import { Image, View, StyleSheet } from "react-native";

class NewReleaseInfo extends Component {
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

    const stylesForImage = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      image: {
        width: 600,
        height: 400
      }
    });

    const textStyles = {
      color: "white"
    };

    return (
      <React.Fragment>
        <center>
          <h1 style={textStyles}>{selectedMovieName}</h1>

          {this.state.newReleasedMovies.map(
            (newReleasedMovie, index, moviesArray) => {
              if (newReleasedMovie.title === selectedMovieName) {
                return (
                  <div>
                    <View style={stylesForImage.container}>
                      <Image
                        style={stylesForImage.image}
                        source={{
                          uri: newReleasedMovie.poster
                        }}
                      />
                    </View>
                    <div>
                      <h3 style={textStyles}>Actors</h3>
                      <p style={textStyles}>{newReleasedMovie.actors}</p>
                    </div>
                    <div>
                      <h3 style={textStyles}>Director</h3>
                      <p style={textStyles}>{newReleasedMovie.director}</p>
                    </div>
                  </div>
                );
              }
            }
          )}
        </center>
      </React.Fragment>
    );
  }
}

export default NewReleaseInfo;
