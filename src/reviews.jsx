import React from "react";

class Reviews extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="reviews-container">
        <header className="header darken-overlay">
          <p>REVIEWS</p>
        </header>
        <main>
          <section>
            <div>
              <h3>If we rocked your hair world, tag our stylist and share your photo and experience on Instagram!</h3>
              <ul>
                <li>
                  <h5>"Kefka is the man! 5/5 stars!!!"</h5>
                  <p>-Ameer A.</p>
                </li>
                <li>
                  <h5>"The ACH team has winning members. Highly recommended!"</h5>
                  <p>-Jon W.</p>
                </li>
                <li>
                  <h5>"I went in a mess, and Sephiroth cleaned me right up. Couldn't be happier!"</h5>
                  <p>-Cloud S.</p>
                </li>
                <li>
                  <h5>"Misty was a professional from beginning to end, ask for her. You won't regret it."</h5>
                  <p>-Ash K.</p>
                </li>
                <li>
                  <h5>"Showed Kefka what I wanted, and he quite literally cloned it above my hairline."</h5>
                  <p>-Kevin M.</p>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Reviews;
