import React from 'react';

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to us anytime.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="input-group">
          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
