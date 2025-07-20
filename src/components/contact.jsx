import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [stage, setStage] = useState('form');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStage('processing');
    setTimeout(() => setStage('complete'), 3000); // simulate transmission
  };

  return (
    <div className="terminal">
      <h2 className="typing-line">{'>'} Initiating Secure Call<span className="cursor">█</span></h2>

      {stage === 'form' && (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" required />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" required />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required />
          </div>

          <button className="submit-btn" type="submit">Send Transmission</button>
        </form>
      )}

      {stage === 'processing' && (
        <div className="processing">
          <p>{'>'} Transmission in progress...</p>
          <div className="glitch-box"></div>
        </div>
      )}

      {stage === 'complete' && (
        <div className="complete">
          <p>{'>'} Transmission complete. Contact Received ✅</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
