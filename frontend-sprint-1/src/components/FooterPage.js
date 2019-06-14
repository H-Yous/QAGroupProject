import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, NavbarBrand } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`



.navbar {
background-color: #222;
font-size: 15px;



}

a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
        color: white;
    }
}
`;

class FooterPage extends React.Component{
  render() {
    return(
     <Styles>
           <Navbar>
           <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
              <Container>
                    <NavbarBrand>Qa Cinema</NavbarBrand>
                    <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
          </Nav.Item>
              </Container>
            </Navbar>      
      </Styles>   
    )
  };
}

export default FooterPage;