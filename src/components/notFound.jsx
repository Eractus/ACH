import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return(
      <div className="not-found-container">
        <h1>Oops!</h1>
        <h3>(a.k.a. 404)</h3>
        <img src="./images/notfound.jpg" alt="Error 404"/>
        <p>Looks like there is nothing here. Check the link and try again, or click <Link  className="not-found-redirect" to="/">here</Link> to go back to the home page.</p>
      </div>
    )
  }
}

export default NotFound;
