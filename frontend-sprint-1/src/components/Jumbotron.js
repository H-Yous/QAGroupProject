import React from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import artImage from "../assets/art.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${artImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 100px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay" />
      <Container>
        <h1>
          {window.location.pathname.charAt(1).toUpperCase() +
            window.location.pathname.substring(
              2,
              window.location.pathname.length
            )}
        </h1>
      </Container>
    </Jumbo>
  </Styles>
);
