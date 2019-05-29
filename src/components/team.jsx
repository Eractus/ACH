import React from "react";

class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: {},
      loading: true
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchIGData().then((artistHTMLs) => {
      this.setState({ artists: artistHTMLs, loading: false })
      window.instgrm.Embeds.process();
    });
  }

  async fetchIGData() {
    let igData = new Promise((resolve, reject) => {
      let artistUrls = {
        "Michelle": "https://www.instagram.com/p/BuK9Y46A987/",
        "Mikey": "https://www.instagram.com/p/BrssnLYhwUx/",
        "Maria": "https://www.instagram.com/p/BlrHAfYnMOu/",
        "Ryan": "https://www.instagram.com/p/BuXyY8KHPfX/",
        "Christina": "https://www.instagram.com/p/Bt9D0TIg3DH/"
      }
      let artistHTMLs = {};
      let apiURL = "https://api.instagram.com/oembed?url=";
      let optionalParams = "&maxwidth=500&hidecaption=true";

      let artist1 = fetch(`${apiURL}${artistUrls["Michelle"]}${optionalParams}`).then(response => {
        return response.json()
      }).then(data => {
        return ["Michelle", data.html];
      })
      let artist2 = fetch(`${apiURL}${artistUrls["Mikey"]}${optionalParams}`).then(response => {
        return response.json()
      }).then(data => {
        return ["Mikey", data.html];
      })
      let artist3 = fetch(`${apiURL}${artistUrls["Maria"]}${optionalParams}`).then(response => {
        return response.json()
      }).then(data => {
        return ["Maria", data.html];
      })
      let artist4 = fetch(`${apiURL}${artistUrls["Ryan"]}${optionalParams}`).then(response => {
        return response.json()
      }).then(data => {
        return ["Ryan", data.html];
      })
      let artist5 = fetch(`${apiURL}${artistUrls["Christina"]}${optionalParams}`).then(response => {
        return response.json()
      }).then(data => {
        return ["Christina", data.html];
      })

      Promise.all([artist1, artist2, artist3, artist4, artist5]).then(htmls => {
        htmls.forEach(html => {
          artistHTMLs[html[0]] = html[1];
        })
        resolve(artistHTMLs);
      })
    });

    let data = await igData;
    return data;
  }

  embedArtistInstagram(artist) {
    let html = this.state.artists[artist];
    return (
      {__html: html}
    )
  }

  render() {
    if (this.state.loading) {
      return <div className="team-loading">Loading...</div>
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
                <h3>Michelle Connelly</h3>
                <h5>Specialty: Vivid Colors and Color Corrections</h5>
                <p>Michelle has been coloring her friends hair since before she was a teenager. What sparked as a
                childhood joy has quickly become her career cornerstone. She enjoys working with complex, vivid colors
                and is at her best when pushing boundaries. Let Michelle bring your hair to life and work alongside your
                creative vision today!</p>
                <div dangerouslySetInnerHTML={this.embedArtistInstagram("Michelle")}></div>
              </span>
              <span className="team-artist-container">
                <h3>Mikey Martinez</h3>
                <h5>Specialty: Cut, Vivid Colors, and Color Corrections</h5>
                <p>Mikey can do it all when it comes to hair. Hair is his passion and he has a knack for creativity that is
                unrivaled in the community. He will always go the extra distance to ensure you leave Alchemy Collective
                Hairlab happy with your look.</p>
                <div dangerouslySetInnerHTML={this.embedArtistInstagram("Mikey")}></div>
              </span>
              <span className="team-artist-container">
                <h3>Maria Moreno</h3>
                <h5>Specialty: Precision Haircuts, Vivid Colors, and Color Corrections</h5>
                <p>Maria has been a professional cosmetologist for over 6 years and specializes in coloring and
                precision cuts. Never a stranger to working long hours, you’ll often find her going the extra mile to
                ensure you’re happy and satisfied with your look! She has industry experience with just about every
                coloring product available, and her years of experience will help narrow down the right color for you!</p>
                <div dangerouslySetInnerHTML={this.embedArtistInstagram("Maria")}></div>
              </span>
              <span className="team-artist-container">
                <h3>Ryan O'Boyle</h3>
                <h5>Specialty: Full Face Shave, Head Shave, Beard Trim, Skin Fade, Scissor Cut, Scissor into Fade, Classic and
                Modern Styles</h5>
                <p>Ryan has been in the industry for over 5 years and offers a breadth of services as a result. He works
                in a very consultative manner and will make sure he understands what look you want to achieve and get
                you there in a comfortable manner. His customer first approach makes him a staple for our men’s
                clientele and you can rest assured that you’re in good hands with Ryan.</p>
                <div dangerouslySetInnerHTML={this.embedArtistInstagram("Ryan")}></div>
              </span>
              <span className="team-artist-container">
                <h3>Christina Pham</h3>
                <h5>Specialty: Vivid Colors and Color Corrections</h5>
                <p>You can often find Christina working into the late hours of the night on a color project that she
                wants to get just right for her client. She will go that extra mile to ensure your color is simply perfection.
                Blonde? Metallic? No problem. Book with Christina today for your desired look!</p>
                <div dangerouslySetInnerHTML={this.embedArtistInstagram("Christina")}></div>
              </span>
            </section>
          </main>
        </div>
      )
    }
  }
}

export default Team;
