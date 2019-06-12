import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; 
import NowShowing from './NowShowing.js'; 
import { NewReleases } from './NewReleases'; 
import { Events } from './Events'; 
import { Screens } from './Screens'; 
import { About } from './About'; 
import Classifications from "./Classifications.js";
import Contact from './Contact.js'; 
import  Payment  from './Payment.js'; 
import { NoMatch } from './NoMatch'; 
import { Layout } from './components/Layout'; 
import { NavigationBar} from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron'; 

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
          <Route path="/contact" component={Contact} />
          <Route path="/payment" component={Payment} />
          <Route path="/classifications" component={Classifications} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment> 
  );
}

}

export default App;
