import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container} from 'react-bootstrap';
import styled from 'styled-components';
import qaImage from '../assets/qa.png'

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
              <Navbar.Brand href="/">
        <img
        src={qaImage}
        width="35"
        height="35"
        className="d-inline-block align-top"
        alt=""
      />
      {'Cinemas'}
        </Navbar.Brand>
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