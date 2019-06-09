import React, { Component } from 'react';

export default class Contact extends Component {
  state = {
    senderName: '',
    senderEmail: '',
    senderMessage: '',
    errorMessage: '',
    formSubmitted: false,
    displayConfirmationModal: false
  };

  contactRef = React.createRef();

  handleSubmit = this.handleSubmit.bind(this);
  update = this.update.bind(this);
  closeConfirmationModal = this.closeConfirmationModal.bind(this);

  componentDidMount() {
    this.contactRef.current.focus();
    const container = document.querySelector(".contact-container");
    container.scrollIntoView();
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

  // invokes Email.js's send function upon handling form submission
  submitMessage(templateId, senderName, senderEmail, senderMessage) {
    window.emailjs
      .send('ach_mailgun', templateId, {
        senderName,
        senderEmail,
        senderMessage
      })
      .then(res => {
        this.setState({
          formEmailSent: true,
          displayConfirmationModal: true
        });
        document.body.style.overflow = "hidden";
      })
      .catch(err => console.error('Failed to send message. Error: ', err)
    );
  }

  // clear all the fields after closing the confirmation modal
  closeConfirmationModal() {
    this.setState({
      senderName: '',
      senderEmail: '',
      senderMessage: '',
      errorMessage: '',
      displayConfirmationModal: false
    });
    document.body.style.overflow = "auto";
  }

  render() {
    const confirmationModal = (this.state.displayConfirmationModal) ?
      <div className="modal-overlay">
        <div className="contact-confirmation-modal">
          <p>Thanks for your message!</p>
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
              ref={this.contactRef}
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
            <ul>
              <li>Monday: 10:00 AM - 8:00 PM</li>
              <li>Tuesday: 10:00 AM - 8:00 PM</li>
              <li>Wednesday: 10:00 AM - 8:00 PM</li>
              <li>Thursday: 10:00 AM - 8:00 PM</li>
              <li>Friday: 10:00 AM - 8:00 PM</li>
              <li>Saturday: 10:00 AM - 8:00 PM</li>
              <li>Sunday: CLOSED</li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}
