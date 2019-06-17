import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./homepage/Home";
import NowShowing from "./nowshowingpage/NowShowing.js";
import { NewReleases } from "./newreleasespage/NewReleases";
import { Events } from "./Events";
import Screens from "./screenspage/Screens";
import Login from "./loginpage/Login.js";
import About from "./aboutpage/About.js";
import Classifications from "./classificationpage/Classifications.js";
import Contact from "./contactpage/Contact.js";
import Payment from "./paymentpage/Payment.js";
import BookingChart from "./bookingpage/BookingChart.js";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import FooterPage from "./components/FooterPage";
import Directions from "./directionspage/Directions.js";
import { Jumbotron } from "./components/Jumbotron";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <NavigationBar />
            <Jumbotron />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/nowShowing" component={NowShowing} />
              <Route path="/newReleases" component={NewReleases} />
              <Route path="/events" component={Events} />
              <Route path="/screens" component={Screens} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/payment" component={Payment} />
              <Route path="/classifications" component={Classifications} />
              <Route path="/booking" component={BookingChart} />
              <Route path="/contact" component={Contact} />
              <Route path="/directions" component={Directions} />
              <Route component={NoMatch} />
            </Switch>
            <br />
            <br />
            <br />
            <br />
            <FooterPage />
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;
