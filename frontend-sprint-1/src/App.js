import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; 
import NowShowing from './NowShowing.js'; 
import { NewReleases } from './NewReleases'; 
import { Events } from './Events'; 
import { Screens } from './Screens'; 
import { About } from './About'; 
import Contact from './Contact.js'; 
import { NoMatch } from './NoMatch'; 
import { Layout } from './components/Layout'; 
import { NavigationBar} from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron'; 
import PropTypes from 'prop-types';
import { env } from './config';

class App extends Component {
  
  render() {

    const ContactPage = (props) => {
      return (
        <Contact
          env={this.props.env.bind(this.props.env)} 
        />
      );
    }

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
            <Route path = "/" component={Contact} />
            <Route exact path="/contact" render={ContactPage} />
            <Route component={NoMatch} />
          </Switch>
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
