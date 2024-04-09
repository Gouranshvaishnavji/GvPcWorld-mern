import React, { useState } from 'react';
import './ContactForm.css'; // Import CSS file for styling

const Contact = () => {
  // State variables to store form field values
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation or submit data to backend here
    console.log('Form submitted:', { fullName, email });
    // Reset form fields after submission
    setFullName('');
    setEmail('');
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Your Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Problem</label>
          <input
            type="text"
            id="fullName"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
