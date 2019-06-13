import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './homepage/Home'; 
import NowShowing from './nowshowingpage/NowShowing.js'; 
import { NewReleases } from './newreleasespage/NewReleases'; 
import { Events } from './Events'; 
import  Screens  from './screenspage/Screens'; 
import Login from './loginpage/Login.js';
import  About  from './aboutpage/About.js'; 
import Classifications from "./classificationpage/Classifications.js";
import Contact from './contactpage/Contact.js'; 
import { NoMatch } from './NoMatch'; 
import { Layout } from './components/Layout'; 
import { NavigationBar} from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron'; 
import PropTypes from 'prop-types';
<<<<<<< HEAD
import  FooterPage  from './components/FooterPage.js';
import { env } from './config';
=======
>>>>>>> 9341c9025a949d4c40026231a064f2b7e58152ff

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
            <Route path="/classifications" component={Classifications} />
            <Route path = "/login" component={Login} />
<<<<<<< HEAD
            <Route path = "/payment" component={Payment} />
            <Route path = "/classification" component={Classifications} />
            <Route path = "/contact" component={Contact} />
            <Route path="/contact" render={ContactPage} />
=======
            <Route path="/contact" component={Contact} />
>>>>>>> 9341c9025a949d4c40026231a064f2b7e58152ff
            <Route component={NoMatch} />
          </Switch>
          <FooterPage />
          </Router>
        </Layout> 
      </React.Fragment> 
    );
  }
}

export default App;
