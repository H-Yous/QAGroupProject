import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { View } from "react-native";

import screen1 from "./Screen1.png";
import screen2 from "./Screen2.png";
import screen3 from "./Screen3.png";

import qual3d from "../assets/filmQuality/3d-sign.png";
import qual4d from "../assets/filmQuality/4d-sign.png";
import qual4k from "../assets/filmQuality/4k-fullhd.png";
import qualhd from "../assets/filmQuality/hd-sign.png";
import qualfhd from "../assets/filmQuality/1080p-full-hd.png";

import ratingu from "../assets/urating.png";
import ratingpg from "../assets/pgrating.png";
import rating12a from "../assets/12arating.png";
import rating15 from "../assets/15rating.png";
import rating18 from "../assets/18rating.png";

class Screens extends Component {
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Table striped borderless variant="dark" size="sm">
              <tr>
                <td>
                  <h2>Seating Options</h2>
                </td>
              </tr>
            </Table>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td style={{ textAlign: "center", justifyContent: "center" }}>
                    <b>Standard</b>
                    <br />
                    Child: £6
                    <br />
                    Student: £8
                    <br />
                    Adult: £10
                  </td>
                </tr>
              </Table>
              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td style={{ textAlign: "center", justifyContent: "center" }}>
                    <b>Premium</b>
                    <br />
                    Child: £10
                    <br />
                    Student: £12
                    <br />
                    Adult: £14
                  </td>
                </tr>
              </Table>
              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td style={{ textAlign: "center", justifyContent: "center" }}>
                    <b>Disabled</b>
                    <br />
                    <br />
                    Always £5
                    <br />
                    <br />
                  </td>
                </tr>
              </Table>
            </View>

            <br />
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td>
                    <h2>Screens</h2>
                  </td>
                </tr>
              </Table>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td>
                    <h4
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <br />
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <img src={qualhd} height={204} width={204} />
                      <br />
                      <img src={qualfhd} height={204} width={204} />
                      <br />
                      <br />
                      <br />
                    </p>
                  </td>
                </tr>
              </Table>

              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td>
                    <h4
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      Screen One
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      Our kids' screen. Suitable for viewing U, PG, and 12A
                      movies.
                      <br />
                      Extra disabled space access is available on request when
                      advance booking.
                      <br />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={screen1} height={352} width={545} />
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
              </Table>

              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td>
                    <h4
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <br />
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <br />
                      <br />
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/u"
                        target="_blank"
                        alt="Universal"
                      >
                        <img src={ratingu} height={96} width={96} />
                      </a>
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/pg"
                        target="_blank"
                        alt="Parental Guidance"
                      >
                        <img src={ratingpg} height={96} width={96} />
                      </a>
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/12a-and-12"
                        target="_blank"
                        alt="12A"
                      >
                        <img src={rating12a} height={96} width={96} />
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </td>
                </tr>
              </Table>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td>
                    <h4
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <br />
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <br />
                      <br />
                      <br />
                      <img src={qualfhd} height={204} width={204} />
                      <br />
                      <img src={qual4k} height={204} width={204} />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </td>
                </tr>
              </Table>

              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td>
                    <h4
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      Screen Two
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      Our signature screen, sutiable for any film and audience.
                      <br />
                      Fully adjustable seating for ultimate comfort and
                      leg-room, and foldable front-row seats for extra
                      disability seating.
                      <br />
                      Premium seating in the centre of the audience provides a
                      fully immersive cinema experience.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={screen2} height={400} width={545} />
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
              </Table>

              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td>
                    <h4
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <br />
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/u"
                        target="_blank"
                        alt="Universal"
                      >
                        <img src={ratingu} height={96} width={96} />
                      </a>
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/pg"
                        target="_blank"
                        alt="Parental Guidance"
                      >
                        <img src={ratingpg} height={96} width={96} />
                      </a>
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/12a-and-12"
                        target="_blank"
                        alt="12A"
                      >
                        <img src={rating12a} height={96} width={96} />
                      </a>
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/15"
                        target="_blank"
                        alt="15"
                      >
                        <img src={rating15} height={96} width={96} />
                      </a>
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/18"
                        target="_blank"
                        alt="18"
                      >
                        <img src={rating18} height={96} width={96} />
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </td>
                </tr>
              </Table>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td>
                    <h4
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <br />
                    </h4>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <img src={qualfhd} height={170} width={170} />
                      <br />
                      <img src={qual4k} height={170} width={170} />
                      <br />
                      <img src={qual3d} height={170} width={170} />
                      <br />
                      <br />
                      <img src={qual4d} height={90} width={210} />
                      <br />
                      <br />
                      <br />
                    </p>
                  </td>
                </tr>
              </Table>

              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td>
                    <h4
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      Screen Three
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      Our IMAX screen, suitable for 3D and 4D movies.
                      <br />
                      All seats include a fully embedded speaker system, as well
                      as optional massage and rumble functions, giving you
                      complete immersive control.
                      <br />
                      In-seat serving of all food and drink items from our lobby
                      is provided as standard.
                      <br />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={screen3} height={496} width={545} />
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
              </Table>

              <Table striped borderless variant="dark" size="sm">
                <tr>
                  <td>
                    <h4
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <br />
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <br />
                      <br />
                      <br />
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/u"
                        target="_blank"
                        alt="Universal"
                      >
                        <img src={ratingu} height={96} width={96} />
                      </a>
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/pg"
                        target="_blank"
                        alt="Parental Guidance"
                      >
                        <img src={ratingpg} height={96} width={96} />
                      </a>
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/12a-and-12"
                        target="_blank"
                        alt="12A"
                      >
                        <img src={rating12a} height={96} width={96} />
                      </a>
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/15"
                        target="_blank"
                        alt="15"
                      >
                        <img src={rating15} height={96} width={96} />
                      </a>
                      <br />
                      <a
                        href="https://bbfc.co.uk/what-classification/18"
                        target="_blank"
                        alt="18"
                      >
                        <img src={rating18} height={96} width={96} />
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </td>
                </tr>
              </Table>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default Screens;
