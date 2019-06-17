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
      upcomingMovieTitles: [],
      nowShowingMovieTitles: [],
      newReleasesMovieTitles: [],
      filtered: []
    };
    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/getUpcomingMovies").then(result => {
      for (var i = 0; i < result.data.length; i++) {
        this.state.upcomingMovieTitles.push(result.data[i].title);
      }
    });
    axios.get("http://localhost:8080/api/getNowShowingMovies").then(result => {
      for (var i = 0; i < result.data.length; i++) {
        this.state.nowShowingMovieTitles.push(result.data[i].title);
      }
    });
    axios.get("http://localhost:8080/api/getNewReleasedMovies").then(result => {
      for (var i = 0; i < result.data.length; i++) {
        this.state.newReleasesMovieTitles.push(result.data[i].title);
      }
    });
  }

  onSearch() {
    console.log(this.state.nowShowingMovieTitles);
    console.log(this.state.upcomingMovieTitles);
  }

  handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.upcomingMovieTitles;
      console.log(currentList[0]);
      newList = currentList.filter(title => {
        const lc = title.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.upcomingMovieTitles;
    }
    this.setState({
      filtered: newList
    });
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
              <div inline>
                <input
                  type="text"
                  className="input"
                  onChange={this.handleChange}
                  placeholder="Search..."
                />

                <Button onClick={this.onSearch} variant="outline-info">
                  Search
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;
