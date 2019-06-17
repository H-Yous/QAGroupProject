import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import qaImage from "../assets/qa.png";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    font-size: 15px;
  }

  .navbar {
    background-color: #222;
    font-size: 15px;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingMovies: [],
      movieTitles: []
    };
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/getUpcomingMovies").then(result => {
      for (var i = 0; i < result.data.length; i++) {
        this.state.movieTitles.push(result.data[i].title);
      }
      this.setState({ upcomingMovies: result.data });
    });
  }

  onSearch() {
    console.log(this.state.movieTitles);
  }

  render() {
    return (
      <Styles>
        <Navbar expand="lg" className="fixed-top">
          <Navbar.Brand href="/">
            <img
              src={qaImage}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt=""
            />
            {"Cinemas"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/nowShowing">Now Showing</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/newReleases">New Releases</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/events">Events & Offers</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/screens">Screens</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/login">Login</Link>
                </Nav.Link>
              </Nav.Item>
              <Form inline>
                <Form.Group controlId="searchFromBar">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button onClick={this.onSearch} variant="outline-info">
                    Search {console.log(this.state.movieTitles)}
                  </Button>
                </Form.Group>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;
