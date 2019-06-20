import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Styles = styled.div`
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
  }
`;

class Home extends Component {
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

  handleRedirect(movieName) {
    this.props.history.push("/nowShowingInfo/" + movieName, { movieName });
  }

  render() {
    return (
      <React.Fragment>
        <Styles>
          <Carousel>
            {this.state.nowShowingMovies.map(
              (nowShowingMovie, index, moviesArray) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={nowShowingMovie.poster}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <Link style={{ textDecoration: "none" }}>
                        <h3
                          style={{ color: "white" }}
                          onClick={() => {
                            this.handleRedirect(nowShowingMovie.title);
                          }}
                        >
                          {nowShowingMovie.title}
                        </h3>
                        <p
                          style={{ color: "white" }}
                          onClick={() => {
                            this.handleRedirect(nowShowingMovie.title);
                          }}
                        >
                          {nowShowingMovie.description}
                        </p>
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
export default withRouter(Home);
