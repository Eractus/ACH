import React, { Component } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Navbar from "./components/navbar";
import Splash from "./components/splash";
import About from "./components/about";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Reviews from "./components/reviews";
import Contact from "./components/contact";
import Footer from "./components/footer";

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
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Splash} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
