import React, { Component } from 'react';
import { env } from '../config';

export default class Contact extends Component {
  state = {
    senderName: '',
    senderEmail: '',
    senderMessage: '',
    formSubmitted: false
  };

  handleSubmit = this.handleSubmit.bind(this);
  update = this.update.bind(this);

  handleSubmit(e) {
    e.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = env;

    this.sendFeedback(
      template,
      this.state.senderName,
      this.state.senderEmail,
      receiverEmail,
      this.state.senderMessage
    );

    this.setState({
      formSubmitted: true
    });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  sendFeedback(templateId, senderName, senderEmail, receiverEmail, senderMessage) {
    window.emailjs
      .send('ach_mailgun', templateId, {
        senderName,
        senderEmail,
        receiverEmail,
        senderMessage
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      .catch(err => console.error('Failed to send message. Error: ', err));
  }

  render() {
    return (
      <div className="contact-container">
        <header className="header darken-overlay">
          <p>CONTACT</p>
        </header>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <h1>Contact us</h1>
          <input
            className="contact-form-name"
            type="text"
            value={this.state.senderName}
            placeholder="Your Name"
            onChange={this.update('senderName')}
          />
          <input
            className="contact-form-email"
            type="text"
            value={this.state.senderEmail}
            placeholder="Your Email"
            onChange={this.update('senderEmail')}
          />
          <textarea
            className="contact-form-message"
            type="text"
            value={this.state.senderMessage}
            placeholder="Your Message"
            onChange={this.update('senderMessage')}
          />
          <input type="submit" value="Send Message" className="contact-form-button" />
        </form>
      </div>
    );
  }
}
