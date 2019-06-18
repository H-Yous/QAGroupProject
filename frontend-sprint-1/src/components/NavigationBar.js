import React from "react";
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
    <Navbar className="fixed-top" expand="lg">
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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
