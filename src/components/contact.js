import React, { Component } from 'react';

export default class Contact extends Component {
  state = {
    senderName: '',
    senderEmail: '',
    senderNumber: '',
    senderMessage: '',
    errorMessage: '',
    formSubmitted: false,
    displayConfirmationModal: false
  };

  handleSubmit = this.handleSubmit.bind(this);
  update = this.update.bind(this);
  closeConfirmationModal = this.closeConfirmationModal.bind(this);

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit(e) {
    e.preventDefault();

    const templateID = "reply_to_form_submission";

    if (this.state.senderName === '') {
      this.setState({ errorMessage: 'Your Name cannot be empty' })
    } else if (this.state.senderEmail === '') {
      this.setState({ errorMessage: 'Your Email cannot be empty' })
    } else if (this.state.senderMessage === '') {
      this.setState({ errorMessage: 'Your Message cannot be empty' })
    } else {
      this.submitMessage(
        templateID,
        this.state.senderName,
        this.state.senderEmail,
        this.state.senderNumber,
        this.state.senderMessage
      );

      this.setState({
        formSubmitted: true
      });
    }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  submitMessage(templateId, senderName, senderEmail, senderNumber, senderMessage) {
    // validations relating to the optional number field
    if (senderNumber !== '') {
      let name = senderName.substring(0, senderName.lastIndexOf(" "));
      const textMessage = `Alchemy Collective Hairlab - Thanks for contacting us ${name}! We will be in touch soon regarding your inquiry. You can also contact us directly at 714-706-2948.`;

      fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: senderNumber,
          body: textMessage
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            this.sendEmail(templateId, senderName, senderEmail, senderMessage);
          } else {
            this.setState({
              errorMessage: 'Message failed to send - double check your number is valid.'
            });
          }
        });
    } else {
      this.sendEmail(templateId, senderName, senderEmail, senderMessage);
    }
  }

  // invokes Email.js's send function upon handling form submission, executed in submitMessage function regardless of presence of optional phone number (unless provided number is invalid)
  sendEmail(templateId, senderName, senderEmail, senderMessage) {
    window.emailjs
      .send('ach_mailgun', templateId, {
        senderName,
        senderEmail,
        senderMessage
      })
      .then(res => {
        this.setState({
          formEmailSent: true,
          senderName: '',
          senderEmail: '',
          senderNumber: '',
          senderMessage: '',
          errorMessage: '',
          displayConfirmationModal: true
        });
        document.body.style.overflow = "hidden";
      })
      .catch(err => console.error('Failed to send message. Error: ', err));
  }

  closeConfirmationModal() {
    this.setState({
      displayConfirmationModal: false
    });
    document.body.style.overflow = "auto";
  }

  render() {
    const confirmationModal = (this.state.displayConfirmationModal) ?
      <div className="modal-overlay">
        <div className="contact-confirmation-modal">
          <p>Your Message Has Been Sent!</p>
          <button onClick={this.closeConfirmationModal}>OK</button>
        </div>
      </div> : "";

    return (
      <div className="contact-container">
        {confirmationModal}
        <header className="header darken-overlay">
          <p>CONTACT</p>
        </header>
        <main className="contact-main-wrapper">
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <h2>Contact Us</h2>
            <input
              className="contact-form-input"
              type="text"
              value={this.state.senderName}
              placeholder="Your Name"
              onChange={this.update('senderName')}
            />
            <input
              className="contact-form-input"
              type="email"
              value={this.state.senderEmail}
              placeholder="Your Email"
              onChange={this.update('senderEmail')}
            />
            <input
              className="contact-form-input"
              type="tel"
              value={this.state.senderNumber}
              placeholder="Your Number (optional)"
              onChange={this.update('senderNumber')}
            />
            <textarea
              className="contact-form-input message"
              type="text"
              value={this.state.senderMessage}
              placeholder="Your Message"
              onChange={this.update('senderMessage')}
            />
            <p>{this.state.errorMessage}</p>
            <input type="submit" value="Send Message" className="contact-form-button" />
          </form>
          <section className="contact-static-info">
            <h2>Hours</h2>
            <p>Currently, we are by Appointments only. Call 714-706-2948 to make yours today!</p>
          </section>
        </main>
      </div>
    );
  }
}
