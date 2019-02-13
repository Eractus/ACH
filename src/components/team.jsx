import React from "react";

class Team extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="team-container">
        <header className="header darken-overlay">
          <p>OUR TEAM</p>
        </header>
        <main>
        </main>
      </div>
    )
  }
}

export default Team;
