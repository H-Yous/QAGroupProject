import React, { Component } from "react";
import { Carousel, Jumbotron, Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import NewReleasesInfo from "./NewReleasesInfo";

const Styles = styled.div`
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
  }
`;

class NewReleases extends Component {
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

  handleRedirect(movieName) {
    this.props.history.push("/newReleasesInfo/" + movieName, { movieName });
  }

  render() {
    return (
      <React.Fragment>
        <Styles>
          <Carousel>
            {this.state.newReleasedMovies.map(
              (newReleasedMovie, index, moviesArray) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={newReleasedMovie.poster}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <Link style={{ textDecoration: "none" }}>
                        <h3
                          style={{ color: "white" }}
                          onClick={() => {
                            this.handleRedirect(newReleasedMovie.title);
                          }}
                        >
                          {newReleasedMovie.title}
                        </h3>
                      </Link>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              }
            )}
          </Carousel>
        </Styles>
      </React.Fragment>
    );
  }
}
export default withRouter(NewReleases);
