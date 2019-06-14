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
        <main className="reviews-main-wrapper">
          <section className="reviews-section-wrapper">
            <h3>Here's Some Love We've Received on Social Media - We Appreciate It!</h3>
            <ul className="reviews-list">
              {this.props.reviews.map((review, index) => (
                <Review key={index} review={review} />
              ))}
            </ul>
          </section>
        </main>
      </div>
    )
  }
}

Reviews.defaultProps = {
  reviews: [
    {
      firstName: "Patty",
      lastInitial: "P",
      body: `Mikey messaged me after my not so delightful experience with a very honest and and genuinely concerned message ... did hair magic on my hair! ... Definitely recommend going to Mikey if you're looking to get services done here!`
    },
    {
      firstName: "Kathy",
      lastInitial: "N",
      body: `This salon is right in the corner of the plaza! ... I booked an appointment with Christina. Lemme tell you, she really cares about her clients! ... I'm soooo pleased with the results!...`
    },
    {
      firstName: "Becca",
      lastInitial: "P",
      body: `... more than 5 stars that's what i'd give michelle! ... overall a great person and hair stylist! i recommend her to everyone i meet!!`
    },
    {
      firstName: "Randy",
      lastInitial: "M",
      body: `My new go to hair salon. This place is roomy ... Mikey knows how give the perfect cut every time.`
    },
    {
      firstName: "Mike",
      lastInitial: "Z",
      body: `Ask for Ryan!  I took my two teenage boys ... impressed and we'll be back!`
    },
  ]
}

const Review = (props) => {
  return (
    <li className="reviews-list-item">
      <h5>{props.review.body}</h5>
      <p>-{props.review.firstName} {props.review.lastInitial}.</p>
    </li>
  )
}

export default Reviews;
