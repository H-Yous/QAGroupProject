import React, { Component } from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import rating_u from '../assets/urating.png';
import rating_pg from '../assets/pgrating.png';
import rating_12a from '../assets/12arating.png';
import rating_15 from '../assets/15rating.png';
import rating_18 from '../assets/18rating.png';

class Classifications extends Component {
  getRatings() {}

  render() {
    return (
      <React.Fragment>
        <h1>Classifications</h1>
        <Jumbo>
          <b>
            <p>
              All film classification decisions are based on the British Board
              of Film Classification's (BBFC) published and regularly updated
              guidelines. For more detailed information about BBFC rulings, and
              for information for parents regarding film classifications and
              their suitability, please visit{" "}
              <a href="http://www.bbfc.co.uk/" target="_blank">
                {" "}
                www.bbfc.co.uk (opens in a new window)
              </a>
            </p>
            <hr />
            <div>
              {" "}
              <img src={rating_u} />
            
              {" "}
              <img src={rating_pg} />
            
              {" "}
              <img src={rating_12a} />
            
              {" "}
              <img src={rating_15} />
            
              {" "}
              <img src={rating_18} />
            </div>
          </b>
          {this.getRatings()}
        </Jumbo>
      </React.Fragment>
    );
  }
}

export default Classifications;
