import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./homepage/Home";
import NowShowing from "./nowshowingpage/NowShowing.js";
import NowShowingInfo from "./nowshowingpage/NowShowingInfo.js";
import NewReleases from "./newreleasespage/NewReleases";
import NewReleaseInfo from "./newreleasespage/NewReleaseInfo";
import Screens from "./screenspage/Screens";
import Classifications from "./classificationpage/Classifications.js";
import Contact from "./contactpage/Contact.js";
import Payment from "./paymentpage/Payment.js";
import BookingChart from "./bookingpage/BookingChart.js";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar.js";
import FooterPage from "./components/FooterPage";
import Directions from "./directionspage/Directions.js";
import { ImageBackground, Text } from "react-native";
import backgroundImage from "./assets/background.jpg";
import styled from "styled-components";
import Confirmation from "./paymentpage/confirmation";

const Styles = styled.div``;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Styles>
          <ImageBackground
            source={backgroundImage}
            imageStyle={{ resizeMode: "repeat" }}
          >
            <Layout>
              <Router>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <NavigationBar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/nowShowing" component={NowShowing} />
				  <Route path="/nowShowingInfo" component={NowShowingInfo} />
                  <Route path="/newReleases" component={NewReleases} />
                  <Route path="/newReleaseInfo" component={NewReleaseInfo} />
                  <Route path="/screens" component={Screens} />
                  {/* <Route path="/login" component={Login} /> */}
                  <Route path="/confirmation" component={Confirmation} />
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
                <br />
                <br />
                <FooterPage />
              </Router>
            </Layout>
          </ImageBackground>
        </Styles>
      </React.Fragment>
    );
  }
}

export default App;
