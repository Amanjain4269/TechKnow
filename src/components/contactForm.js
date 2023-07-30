import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/header.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const formRef = useRef(); // ref to access the form element

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all the required fields.');
      return;
    }
    
    // Accessing the form element using the ref
    const form = formRef.current;

    // Sending email using Email.js
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
        alert('Thank you for contacting us! We will reach out to you soon.');
      }, (error) => {
        console.log(error.text);
      });

    // Resetting the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact-form">
      
      <form ref={formRef} method='post' onSubmit={handleSubmit}>
        <h2>Contact<span>Us</span></h2>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName}/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email}/>
        <textarea name="message" placeholder="Your message" onChange={handleChange} value={formData.message}></textarea>
        <button type="submit">Submit</button>
        <p>{formData.firstName}  {formData.lastName}</p>
      </form>
    </section>
  );
};

export default ContactForm;
