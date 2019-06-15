import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Navbar from "./components/navbar";
import Splash from "./components/splash";
import BookAppointment from "./components/book";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Reviews from "./components/reviews";
import Contact from "./components/contact";
import NotFound from "./components/notFound";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/book" component={BookAppointment} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Splash} />
          <Route to="/" component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
