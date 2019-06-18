import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

import qaImage from "../assets/qa.png";
import springImage from "../assets/technologies/spring.png";
import mongoImage from "../assets/technologies/mongodb.png";
import reactImage from "../assets/technologies/react.png";

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
                id="qacLink"
                src={qaImage}
                className="d-inline-block align-center"
                alt="QA Consulting"
              />
              {"Consulting"}
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item id="aboutLink">
                  <Nav.Link>
                    <Link to="/about">About</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item id="faqLink">
                  <Nav.Link>
                    <Link to="/faq">FAQ</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item id="contactLink">
                  <Nav.Link>
                    <Link to="/contact">Contact</Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <a href="https://spring.io/" target="_blank">
                    <img
                      id="springLink"
                      src={springImage}
                      className="img-responsive"
                      alt="Spring Tool Suite"
                    />
                  </a>
                  <a href="https://www.mongodb.com/" target="_blank">
                    <img
                      id="mongoLink"
                      src={mongoImage}
                      className="img-responsive"
                      alt="MongoDB"
                    />
                  </a>
                  <a href="https://reactjs.org/" target="_blank">
                    <img
                      id="reactLink"
                      src={reactImage}
                      className="img-responsive"
                      alt="React"
                    />
                  </a>
                  {"|||||"}
                  <a href="http://facebook.com" target="_blank">
                    <img
                      id="fbBtn"
                      className="img-responsive"
                      src={fbImage}
                      onMouseOver={e => (e.currentTarget.src = hfbImage)}
                      onMouseOut={e => (e.currentTarget.src = fbImage)}
                      alt="Facebook"
                    />
                  </a>
                  <a href="http://twitter.com" target="_blank">
                    <img
                      id="twBtn"
                      className="img-responsive"
                      src={twImage}
                      onMouseOver={e => (e.currentTarget.src = htwImage)}
                      onMouseOut={e => (e.currentTarget.src = twImage)}
                      alt="Twitter"
                    />
                  </a>
                  <a href="http://instagram.com" target="_blank">
                    <img
                      id="igBtn"
                      className="img-responsive"
                      src={igImage}
                      onMouseOver={e => (e.currentTarget.src = higImage)}
                      onMouseOut={e => (e.currentTarget.src = igImage)}
                      alt="Instagram"
                    />
                  </a>
                  <a href="http://linkedin.com" target="_blank">
                    <img
                      id="liBtn"
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
                      id="gitBtn"
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
