import React from "react";

class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
      loading: true
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchIGData().then((artistHTMLs) => {
      this.setState({ artists: artistHTMLs, loading: false })
    });
  }

  fetchIGData() {
    return new Promise((resolve, reject) => {
      let artistUrls = [
        "https://www.instagram.com/p/fA9uwTtkSN/",
        "https://www.instagram.com/p/BusBK6ahZ5Z/",
        "https://www.instagram.com/p/BwxQkpKgHr6/",
        "https://www.instagram.com/p/Bvm1REThEgX/"
      ]
      let artistHTMLs = [];
      fetch("https://api.instagram.com/oembed?url=" + artistUrls[0]).then(response => {
        return response.json()
      }).then(data => {
        let html = this.partitionResponseHTML(data.html);
        artistHTMLs.push(html);
      }).then(fetch("https://api.instagram.com/oembed?url=" + artistUrls[1]).then(response => {
        return response.json()
      }).then(data => {
        let html = this.partitionResponseHTML(data.html);
        artistHTMLs.push(html);
      })).then(fetch("https://api.instagram.com/oembed?url=" + artistUrls[2]).then(response => {
        return response.json()
      }).then(data => {
        let html = this.partitionResponseHTML(data.html);
        artistHTMLs.push(html);
      })).then(fetch("https://api.instagram.com/oembed?url=" + artistUrls[3]).then(response => {
        return response.json()
      }).then(data => {
        let html = this.partitionResponseHTML(data.html);
        artistHTMLs.push(html);
        resolve(artistHTMLs);
      }))
    });
  }

  partitionResponseHTML(html) {
    return html.slice(0, 6862);
  }

  embedArtist1Instagram(num) {
    let html = this.state.artists[num-1];
    return (
      {__html: html}
    )
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="team-container">
          <header className="header darken-overlay">
            <p>OUR TEAM</p>
          </header>
          <main className="team-main-wrapper">
            <h1>Meet Our Staff of Expert Stylists</h1>
            <section className="team-section-wrapper">
              <span className="team-artist-container">
                <h3>Expert Artist 1</h3>
                <p>Are ya ready kids? Aye, Aye captain! I can't heeeaaar yooouuu! AYE, AYE CAPTAIN! oooooooooooo.........Who lives in a pineapple under the sea? Sponge Bob Square Pants! Absorbent and yellow and porous is he. Sponge Bob Square Pants! If nautical nonsense be somethin' ya wish. Sponge Bob Square Pants! Then drop on the deck and flop like a fish. Sponge Bob Square Pants!</p>
                <div dangerouslySetInnerHTML={this.embedArtist1Instagram(1)}></div>
              </span>
              <span className="team-artist-container">
                <h3>Expert Artist 2</h3>
                <p>Are ya ready kids? Aye, Aye captain! I can't heeeaaar yooouuu! AYE, AYE CAPTAIN! oooooooooooo.........Who lives in a pineapple under the sea? Sponge Bob Square Pants! Absorbent and yellow and porous is he. Sponge Bob Square Pants! If nautical nonsense be somethin' ya wish. Sponge Bob Square Pants! Then drop on the deck and flop like a fish. Sponge Bob Square Pants!</p>
                <div dangerouslySetInnerHTML={this.embedArtist1Instagram(2)}></div>
              </span>
              <span className="team-artist-container">
                <h3>Expert Artist 3</h3>
                <p>Are ya ready kids? Aye, Aye captain! I can't heeeaaar yooouuu! AYE, AYE CAPTAIN! oooooooooooo.........Who lives in a pineapple under the sea? Sponge Bob Square Pants! Absorbent and yellow and porous is he. Sponge Bob Square Pants! If nautical nonsense be somethin' ya wish. Sponge Bob Square Pants! Then drop on the deck and flop like a fish. Sponge Bob Square Pants!</p>
                <div dangerouslySetInnerHTML={this.embedArtist1Instagram(3)}></div>
              </span>
              <span className="team-artist-container">
                <h3>Expert Artist 4</h3>
                <p>Are ya ready kids? Aye, Aye captain! I can't heeeaaar yooouuu! AYE, AYE CAPTAIN! oooooooooooo.........Who lives in a pineapple under the sea? Sponge Bob Square Pants! Absorbent and yellow and porous is he. Sponge Bob Square Pants! If nautical nonsense be somethin' ya wish. Sponge Bob Square Pants! Then drop on the deck and flop like a fish. Sponge Bob Square Pants!</p>
                <div dangerouslySetInnerHTML={this.embedArtist1Instagram(4)}></div>
              </span>
            </section>
          </main>
        </div>
      )
    }
  }
}

export default Team;
