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
<<<<<<< HEAD
          <Nav.Item>
            <Nav.Link>
              <Link to="/events">Events & Offers</Link>
            </Nav.Link>
          </Nav.Item>
=======
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
          <Nav.Item>
            <Nav.Link>
              <Link to="/screens">Screens</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
<<<<<<< HEAD
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav.Item>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
=======
            <SearchBar />
          </Nav.Item>
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
