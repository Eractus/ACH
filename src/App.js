import React, { Component } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Navbar from "./navbar";
import Splash from "./splash";
import About from "./about";
import Services from "./services";
import Gallery from "./gallery";
import Reviews from "./reviews";
import Footer from "./footer";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/" component={Splash} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
