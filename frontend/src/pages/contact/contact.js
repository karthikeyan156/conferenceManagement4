import React, { useState } from 'react';
import './contactPage.css'; // Make sure to create a corresponding CSS file for styling

function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you could add functionality to send form data to a server or email service
    alert('Thank you for your message!');
    setFormState({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div className="contact-page-container">
      <div className="contact-details">
        <img src={"https://png.pngtree.com/templates/20180813/community-organization-logo-design-template-png_28632.jpg"} alt="Organization Logo" className="org-logo" />
        <h3>Our Organization</h3>
        <p><strong>Email:</strong> contact@ourorg.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Address:</strong> 123 Main St, City, Country</p>
      </div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;

