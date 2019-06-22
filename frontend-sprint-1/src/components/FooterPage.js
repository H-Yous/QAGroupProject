import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

import qaImage from "../assets/logo/qa.png";
import springImage from "../assets/icon/technologies/spring.png";
import mongoImage from "../assets/icon/technologies/mongodb.png";
import reactImage from "../assets/icon/technologies/react.png";

import git from "../assets/icon/social/git.png";
import hgit from "../assets/icon/social/git-hover.png";

import fbImage from "../assets/icon/social/facebook.png";
import igImage from "../assets/icon/social/instagram.png";
import liImage from "../assets/icon/social/linkedin.png";
import twImage from "../assets/icon/social/twitter.png";

import hfbImage from "../assets/icon/social/facebook-hover.png";
import higImage from "../assets/icon/social/instagram-hover.png";
import hliImage from "../assets/icon/social/linkedin-hover.png";
import htwImage from "../assets/icon/social/twitter-hover.png";

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
                <Nav.Item id="directionsLink">
                  <Nav.Link>
                    <Link to="/directions">Getting Here</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item id="classificationsLink">
                  <Nav.Link>
                    <Link to="/classifications">Classifications</Link>
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
                  <a
                    href="https://en-gb.facebook.com/QAConsultingUK/"
                    target="_blank"
                  >
                    <img
                      id="fbBtn"
                      className="img-responsive"
                      src={fbImage}
                      onMouseOver={e => (e.currentTarget.src = hfbImage)}
                      onMouseOut={e => (e.currentTarget.src = fbImage)}
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://twitter.com/cinemas_qa" target="_blank">
                    <img
                      id="twBtn"
                      className="img-responsive"
                      src={twImage}
                      onMouseOver={e => (e.currentTarget.src = htwImage)}
                      onMouseOut={e => (e.currentTarget.src = twImage)}
                      alt="Twitter"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/purpleqacinemas/"
                    target="_blank"
                  >
                    <img
                      id="igBtn"
                      className="img-responsive"
                      src={igImage}
                      onMouseOver={e => (e.currentTarget.src = higImage)}
                      onMouseOut={e => (e.currentTarget.src = igImage)}
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/qaconsulting"
                    target="_blank"
                  >
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
