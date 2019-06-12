import React, { Component } from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";

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
              <img src="http://localhost:3000/static/media/urating.png" />
              <p>U</p>
            </div>
            <div>
              {" "}
              <img src="http://localhost:3000/static/media/pgrating.png" />
              <p>PG</p>
            </div>
            <div>
              {" "}
              <img src="http://localhost:3000/static/media/12arating.png" />
              <p>12A</p>
            </div>
            <div>
              {" "}
              <img src="http://localhost:3000/static/media/15rating.png" />
              <p>15</p>
            </div>

            <div>
              {" "}
              <img src="http://localhost:3000/static/media/18rating.png" />
              <p>18</p>
            </div>
          </b>
          {this.getRatings()}
        </Jumbo>
      </React.Fragment>
    );
  }
}

export default Classifications;
