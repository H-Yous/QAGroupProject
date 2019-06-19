import React, { Component } from "react";
import axios from "axios";
import uRating from "../assets/urating.png";
import pgRating from "../assets/pgrating.png";
import twelveaRating from "../assets/12arating.png";
import fifteenRating from "../assets/15rating.png";
import eighteenRating from "../assets/18rating.png";
import tbcRating from "../assets/tbcrating.png";

class NowShowingInfo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    nowShowingMovies: []
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/getNowShowingMovies").then(result => {
      this.setState({ nowShowingMovies: result.data });
    });
  }
  render() {
    const currentUrl = decodeURI(window.location.href);
    const selectedMovieName = currentUrl.substring(
      currentUrl.lastIndexOf("/") + 1
    );
    return (
      <React.Fragment>
        {this.state.nowShowingMovies.map(
          (nowShowingMovie, index, moviesArray) => {
            if (nowShowingMovie.title === selectedMovieName) {
              return (
                <div class="card">
                  <center>
                    <h1>{nowShowingMovie.title}</h1>
                  </center>
                  <img
                    class="card-img-top"
                    src={nowShowingMovie.altPoster}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h3 class="card-text">Description</h3>
                    <p class="card-text">{nowShowingMovie.description}</p>
                  </div>

                  <div class="card-body">
                    <h3 class="card-text">Actors</h3>
                    <p class="card-text">{nowShowingMovie.actors}</p>
                  </div>

                  <div class="card-body">
                    <h3 class="card-text">Director</h3>
                    <p class="card-text">{nowShowingMovie.director}</p>
                  </div>
                  <div class="mt-auto">
                    <p>
                      <small className="text-muted">
                        {nowShowingMovie.runtime} mins
                      </small>
                    </p>
                    {(() => {
                      if (nowShowingMovie.certification == "U") {
                        return (
                          <a
                            href="https://bbfc.co.uk/what-classification/u"
                            target="_blank"
                            alt="Universal"
                          >
                            <img src={uRating} height="50" width="50" />
                          </a>
                        );
                      } else if (nowShowingMovie.certification == "PG") {
                        return (
                          <a
                            href="https://bbfc.co.uk/what-classification/pg"
                            target="_blank"
                            alt="Parental Guidance"
                          >
                            <img src={pgRating} height="50" width="50" />
                          </a>
                        );
                      } else if (
                        nowShowingMovie.certification == "12" ||
                        nowShowingMovie.certification == "12A"
                      ) {
                        return (
                          <a
                            href="https://bbfc.co.uk/what-classification/12a-and-12"
                            target="_blank"
                            alt="12A"
                          >
                            <img src={twelveaRating} height="50" width="50" />
                          </a>
                        );
                      } else if (nowShowingMovie.certification == "15") {
                        return (
                          <a
                            href="https://bbfc.co.uk/what-classification/15"
                            target="_blank"
                            alt="15"
                          >
                            <img src={fifteenRating} height="50" width="50" />
                          </a>
                        );
                      } else if (nowShowingMovie.certification == "18") {
                        return (
                          <a
                            href="https://bbfc.co.uk/what-classification/18"
                            target="_blank"
                            alt="18"
                          >
                            <img src={eighteenRating} height="50" width="50" />
                          </a>
                        );
                      } else {
                        return <img src={tbcRating} height="50" width="50" />;
                      }
                    })()}
                  </div>
                </div>
              );
            }
          }
        )}
      </React.Fragment>
    );
  }
}
export default NowShowingInfo;
