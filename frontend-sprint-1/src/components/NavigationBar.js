import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import qaImage from "../assets/qa.png";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    font-size: 15px;
  }

  .navbar {
    background-color: #222;
    font-size: 15px;
  }

  .d-inline-block {
    height: 35px;
    width: 35px;
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

export const NavigationBar = () => (
  <Styles>
    <Navbar  expand="lg">
      <Navbar.Brand href="/">
        <img src={qaImage} className="d-inline-block align-top" alt="" />
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
          <Nav.Item id="classificationsLink">
            <Nav.Link>
              <Link to="/classifications">Classifications</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/screens">Screens</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item id="directionsLink">
            <Nav.Link>
              <Link to="/directions">Getting Here</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
                <SearchBar />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);