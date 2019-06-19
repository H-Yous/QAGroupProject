import React, { Component } from "react";
import { View } from "react-native";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { PropTypes } from "prop-types";
<<<<<<< HEAD
=======
import { Table } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import InstagramEmbed from "react-instagram-embed";
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6

class ContactPanel extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      enquirerEmail: "",
      enquirerPlaceholder: "Email address...",
      feedback: "",
      placeholder:
        "We aim to process your enquiry within three working days, and will never share your email address."
    };
    const enquirerEmailValue = null;
    const feedbackValue = null;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange = event => {
    const changeState = this.state;
    changeState[event.target.name] = event.target.value;
    this.enquirerEmailValue = event.target.value;
    this.setState(changeState);
    console.log(event.target.value);
  };

  handleFeedbackChange = event => {
    const changeState = this.state;
    changeState[event.target.name] = event.target.value;
    this.feedbackValue = event.target.value;
    this.setState(changeState);
    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    event.persist();

    const submitState = this.state;
    this.setState(submitState);

    axios.defaults.baseURL = "http://localhost:8080";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post("/contact/sendEmail", {
        enquirerEmail: this.enquirerEmailValue,
        emailText: this.feedbackValue
      })
      .then(result => {
        this.props.history.push("/contact");
        this.setState({
          enquirerEmail: "",
          enquirerPlaceholder: "Your email address has been logged.",
          feedback: "",
          placeholder: "Email sent!"
        });
      })
      .then(() => new Promise(resolve => setTimeout(resolve, 2500)))
      .then(result => {
        this.setState({
          enquirerPlaceholder: "Email address...",
          placeholder:
            "We aim to process your enquiry within three working days, and will never share your email address."
        });
      })
      .catch(err => {
        console.error("Failed to send feedback. " + err);
      });
  };

  render() {
    const feedback = this.state;

    return (
<<<<<<< HEAD
      <div className="all">
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div className="contactinfo-container">
            <View style={{ flex: 1, flexDirection: "column" }}>
              <label
                className="enquirerEmailLabel"
                id="enquirerEmail"
                name="enquirerEmail"
              >
                <i>You can contact us directly here.</i>
                <br />
                <i>
                  Alternatively, you can take a look at our{" "}
                  <Link to="/faq">FAQ</Link>.
                </i>
              </label>

              <br />

              <label
                className="contactinfoLabel"
                id="contactinfo"
                name="contactinfo"
              >
                <b>Enquiries Address:</b>
                <br />
                <i>c/o QA Cinemas, Ltd.</i>
                <br />
                PO Box 555-0123
                <br />
                Tammouth TM9 8EF
                <br />
                Alanshire
                <br />
                United Kingdom
                <br />
              </label>

              <br />

              <label
                className="venuecontactinfoLabel"
                id="venuecontactinfo"
                name="venuecontactinfo"
              >
                <b>Venue Address:</b>
                <br />
                <i>3.329, International House</i>
                <br />
                1 St. Katharine's Way
                <br />
                St. Katharine's & Wapping
                <br />
                London E1W 1UN
                <br />
                Greater London
                <br />
                United Kingdom
              </label>

              <br />

              <label
                className="headquartersLabel"
                id="headquartersinfo"
                name="headquartersinfo"
              >
                <b>QA Cinemas International HQ:</b>
                <br />
                <i>Rath House</i>
                <br />
                55-65 Uxbridge Road
                <br />
                Slough SL1 1SQ
                <br />
                Berkshire <br />
                United Kingdom
              </label>
            </View>
          </div>

          <div className="contact-container">
            <form className="feedback" onSubmit={this.handleSubmit}>
              <View style={{ flex: 1, flexDirection: "column", width: 750 }}>
                <input
                  className="text-input"
                  id="enquirerEmail"
                  name="enquirerEmail"
                  onChange={this.handleEmailChange.bind(this)}
                  value={this.state.enquirerEmail}
                  placeholder={this.state.enquirerPlaceholder}
                  required
                />

                <br />

                <textarea
                  className="text-input"
                  id="feedback"
                  name="feedback"
                  onChange={this.handleFeedbackChange.bind(this)}
                  value={this.state.feedback}
                  rows="20"
                  placeholder={this.state.placeholder}
                  required
                />

                <br />

                <input type="submit" value="Submit" />
              </View>
            </form>
          </div>
        </View>
      </div>
=======
      <React.Fragment>
        <Table striped bordered variant="dark" size="sm">
          <tr>
            <td>
              <div className="all">
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 20
                  }}
                >
                  <div className="contactinfo-container">
                    <View style={{ flex: 1, flexDirection: "column" }}>
                      <label
                        className="contactinfoLabel"
                        id="contactinfo"
                        name="contactinfo"
                      >
                        <br />
                        <b>Enquiries Address:</b>
                        <br />
                        <i>c/o QA Cinemas, Ltd.</i>
                        <br />
                        PO Box 555-0123
                        <br />
                        Tammouth TM9 8EF
                        <br />
                        Alanshire
                        <br />
                        United Kingdom
                        <br />
                        0118 999 881 999 119 725 3
                      </label>

                      <br />

                      <label
                        className="venuecontactinfoLabel"
                        id="venuecontactinfo"
                        name="venuecontactinfo"
                      >
                        <b>Venue Address:</b>
                        <br />
                        <i>3.329, International House</i>
                        <br />
                        1 St. Katharine's Way
                        <br />
                        St. Katharine's & Wapping
                        <br />
                        London E1W 1UN
                        <br />
                        Greater London
                        <br />
                        United Kingdom
                        <br />
                        0845 074 7829
                      </label>

                      <br />

                      <label
                        className="headquartersLabel"
                        id="headquartersinfo"
                        name="headquartersinfo"
                      >
                        <b>QA Cinemas International HQ:</b>
                        <br />
                        <i>Rath House</i>
                        <br />
                        55-65 Uxbridge Road
                        <br />
                        Slough SL1 1SQ
                        <br />
                        Berkshire <br />
                        United Kingdom
                        <br />
                        0345 074 7840
                      </label>
                    </View>
                  </div>
                  <div className="contact-container">
                    <form className="feedback" onSubmit={this.handleSubmit}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "column",
                          width: 750,
                          padding: 20
                        }}
                      >
                        <input
                          className="text-input"
                          id="enquirerEmail"
                          name="enquirerEmail"
                          onChange={this.handleEmailChange.bind(this)}
                          value={this.state.enquirerEmail}
                          placeholder={this.state.enquirerPlaceholder}
                          style={{ backgroundColor: "lightgray" }}
                          required
                        />
                        <br />
                        <textarea
                          className="text-input"
                          id="feedback"
                          name="feedback"
                          onChange={this.handleFeedbackChange.bind(this)}
                          value={this.state.feedback}
                          rows="20"
                          placeholder={this.state.placeholder}
                          required
                          style={{
                            backgroundColor: "lightgray"
                          }}
                        />
                        <br />
                        <input type="submit" value="Submit" />
                      </View>
                    </form>
                  </div>
                </View>
              </div>
            </td>
          </tr>
        </Table>
        <Table striped bordered variant="dark" size="sm">
          <tr>
            <td>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="cinemas_qa"
                options={{ height: 850 }}
                async
              />
            </td>
            <td>
              <InstagramEmbed
                url="https://www.instagram.com/p/By23AlPpIgb/?igshid=18o6r57fwe827"
                maxWidth="600"
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
                async
              />
            </td>
          </tr>
        </Table>
      </React.Fragment>
>>>>>>> 87f86268a074a4f661895c9e07d02a6a3da64ba6
    );
  }
}

export default withRouter(ContactPanel);
