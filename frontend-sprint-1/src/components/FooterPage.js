import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

import qaImage from "../assets/qa.png";

import git from "../assets/social/git.png";
import hgit from "../assets/social/git-hover.png";

import fbImage from "../assets/social/facebook.png";
import igImage from "../assets/social/instagram.png";
import liImage from "../assets/social/linkedin.png";
import twImage from "../assets/social/twitter.png";

import hfbImage from "../assets/social/facebook-hover.png";
import higImage from "../assets/social/instagram-hover.png";
import hliImage from "../assets/social/linkedin-hover.png";
import htwImage from "../assets/social/twitter-hover.png";

const Styles = styled.div`
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

  .d-inline-block {
    height: 40px;
    width: 40px;
  }

  img {
    padding: 2px 2px 2px 2px;
    height: 30px;
    width: 30px;
  }
`;

class FooterPage extends React.Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Styles>
          <Navbar>
            <Navbar.Brand href="https://consulting.qa.com/" target="_blank">
              <img
                src={qaImage}
                className="d-inline-block align-center"
                alt="QA Consulting"
              />
              {"Consulting"}
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/directions">Directions</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/nearby">Nearby</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/services">Lobby</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/contact">Contact</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/faq">FAQ</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/about">About</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/legal">Legal</Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <a href="http://facebook.com" target="_blank">
                    <img
                      className="img-responsive"
                      src={fbImage}
                      onMouseOver={e => (e.currentTarget.src = hfbImage)}
                      onMouseOut={e => (e.currentTarget.src = fbImage)}
                      alt="Facebook"
                    />
                  </a>
                  <a href="http://twitter.com" target="_blank">
                    <img
                      className="img-responsive"
                      src={twImage}
                      onMouseOver={e => (e.currentTarget.src = htwImage)}
                      onMouseOut={e => (e.currentTarget.src = twImage)}
                      alt="Twitter"
                    />
                  </a>
                  <a href="http://instagram.com" target="_blank">
                    <img
                      className="img-responsive"
                      src={igImage}
                      onMouseOver={e => (e.currentTarget.src = higImage)}
                      onMouseOut={e => (e.currentTarget.src = igImage)}
                      alt="Instagram"
                    />
                  </a>
                  <a href="http://linkedin.com" target="_blank">
                    <img
                      className="img-responsive"
                      src={liImage}
                      onMouseOver={e => (e.currentTarget.src = hliImage)}
                      onMouseOut={e => (e.currentTarget.src = liImage)}
                      alt="LinkedIn"
                    />
                  </a>
                  <a
                    href="https://github.com/H-Yous/QAGroupProject"
                    target="_blank"
                  >
                    <img
                      src={git}
                      onMouseOver={e => (e.currentTarget.src = hgit)}
                      onMouseOut={e => (e.currentTarget.src = git)}
                      alt="GitHub"
                    />
                  </a>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>
      </div>
    );
  }
}

export default FooterPage;
