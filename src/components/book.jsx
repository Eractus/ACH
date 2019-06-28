import React from "react";

class BookAppointment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artistURLs: {},
      loading: true
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchIGData().then((artistHTMLs) => {
      this.setState({ artistURLs: artistHTMLs, loading: false })
      window.instgrm.Embeds.process();
    });
  }

  async fetchIGData() {
    let igData = new Promise((resolve, reject) => {
      const apiURL = "https://api.instagram.com/oembed?url=";
      const optionalParams = "&maxwidth=500&hidecaption=true";
      let artistHTMLs = {};
      let artistData = [];

      this.props.artists.forEach(artist => {
        let payload = fetch(`${apiURL}${artist.profileURL}${optionalParams}`).then(response => {
          return response.json();
        }).then(data => {
          return [artist.firstName, data.html];
        });
        artistData.push(payload);
      })

      Promise.all(artistData).then(htmls => {
        htmls.forEach(html => {
          artistHTMLs[html[0]] = html[1];
        })
        resolve(artistHTMLs);
      })
    });

    let data = await igData;
    return data;
  }

  embedIG(artist) {
    let html = this.state.artistURLs[artist];
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
          <header className="header booking darken-overlay">
            <p>BOOK APPOINTMENT</p>
          </header>
          <main className="team-main-wrapper">
            <h1>Select Your Stylist and Book Directly through Instagram</h1>
            <section className="team-section-wrapper">
              {this.props.artists.map((artist, index) => {
                return <Artist key={index} artist={artist} embedHTML={this.embedIG(artist.firstName)} />
              })}
            </section>
          </main>
        </div>
      )
    }
  }
}

BookAppointment.defaultProps = {
  artists: [
    {
      firstName: "Mikey",
      lastName: "Martinez",
      number: "(714) 474-1207",
      specialty: "Cut, Vivid Colors, and Color Corrections",
      bio: `Mikey can do it all when it comes to hair. Hair is his passion and he has a knack for creativity that is
      unrivaled in the community. He will always go the extra distance to ensure you leave Alchemy Collective
      Hairlab happy with your look.`,
      profileURL: "https://www.instagram.com/p/BrssnLYhwUx/"
    },
    {
      firstName: "Christina",
      lastName: "Pham",
      number: "(714) 251-9532",
      specialty: "Vivid Colors and Color Corrections",
      bio: `You can often find Christina working into the late hours of the night on a color project that she
      wants to get just right for her client. She will go that extra mile to ensure your color is simply perfection.
      Blonde? Metallic? No problem. Book with Christina today for your desired look!`,
      profileURL: "https://www.instagram.com/p/Bt9D0TIg3DH/"
    },
    {
      firstName: "Juliet",
      lastName: "Rodriguez",
      number: "(425) 232-0519",
      specialty: "Vivid Colors, Balayages, Babylights, Color Corrections",
      bio: `Juliet's love for hair began at an early age when she styled hair for her friends and family. That passion later blossomed into a full-time career for her. Painting balayage and Vivid Color comes natural to her, like an artist with her brush. Juliet aims to have every client leave the salon feeling as beautiful as they possibly can!`,
      profileURL: "https://www.instagram.com/p/BkQYRpdhuKG/"
    },
    {
      firstName: "Ryan",
      lastName: "O'Boyle",
      number: "(714) 322-5092",
      specialty: `Full Face/Head Shave, Beard Trim, Skin Fade, Classic and Modern Styles`,
      bio: `Ryan has been in the industry for over 5 years and offers a breadth of services as a result. He works
      in a very consultative manner and will make sure he understands what look you want to achieve and get
      you there in a comfortable manner. His customer first approach makes him a staple for our men’s
      clientele and you can rest assured that you’re in good hands with Ryan.`,
      profileURL: "https://www.instagram.com/p/BuXyY8KHPfX/"
    },
    {
      firstName: "Michelle",
      lastName: "Connelly",
      number: "(562) 472-5043",
      specialty: "Vivid Colors and Color Corrections",
      bio: `Michelle has been coloring her friends hair since before she was a teenager. What sparked as a
      childhood joy has quickly become her career cornerstone. She enjoys working with complex, vivid colors
      and is at her best when pushing boundaries. Let Michelle bring your hair to life and work alongside your
      creative vision today!`,
      profileURL: "https://www.instagram.com/p/BuK9Y46A987/"
    },
    {
      firstName: "Maria",
      lastName: "Moreno",
      number: "(714) 472-5473",
      specialty: "Precision Haircuts, Vivid Colors, and Color Corrections",
      bio: `Maria has been a professional cosmetologist for over 6 years and specializes in coloring and
      precision cuts. Never a stranger to working long hours, you’ll often find her going the extra mile to
      ensure you’re happy and satisfied with your look! She has industry experience with just about every
      coloring product available, and her years of experience will help narrow down the right color for you!`,
      profileURL: "https://www.instagram.com/p/BlrHAfYnMOu/"
    },
    {
      firstName: "Clarissa",
      lastName: "Guerrero",
      number: "(714) 858-7513",
      specialty: "Blonding and Keratin Treatments, Balayage, Highlights/Ombré, Babylights,Traditional Highlights",
      bio: `Clarissa has been in the industry for nearly a decade - and her certifications from industry experts such as Schwartzlkopf, Redken, Oribe, R+Co, The Kingly Hair Group, and Keratin Complex are only a few of the many companies that Clarissa has trained under. Feel confident knowing your hair is in the best hands as Clarissa continually invests in herself to to offer the consistent, beautiful results you need to get your perfect look!`,
      profileURL: "https://www.instagram.com/p/BwyZfDgnMPf/"
    }
  ]
}

const Artist = (props) => {
  return (
    <span className="team-artist-container">
      <h3>{props.artist.firstName} {props.artist.lastName}</h3>
      <h4>Tel: {props.artist.number}</h4>
      <h5>Specialty: {props.artist.specialty}</h5>
      <p>{props.artist.bio}</p>
      <div dangerouslySetInnerHTML={props.embedHTML}></div>
    </span>
  )
}

export default BookAppointment;
