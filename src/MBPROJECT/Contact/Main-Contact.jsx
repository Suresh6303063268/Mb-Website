import React, { useState } from 'react';

import './Main-Contact.css';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
   
  };

  return (
    <div className="contact-container">
         <div className="contact-main">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p> <PlaceIcon/>Viganan's Foundation for Science, Technolgy and Reaserch (Deemed to be University). Vadlamudi, N-block 2nd floor TBI Guntur-522213</p>
        <p> <EmailIcon/>info@maawaabroitsolutions.com</p>
        <p> <AccountCircleIcon/>G.GIRIRAM (Founder & CEO)
        </p>
        <p> <PhoneAndroidIcon/>Phone: +8639023948, +91 7671829282</p>
        <div className="social-icons">
          {/* Social Media Icons */}
          <InstagramIcon/>
          <XIcon/>
          <LinkedInIcon/>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Get in Touch</h3>
        <p>Feel free to drop us a line below</p>
        <div className='from-group'>
        <label> Enter Your Name :-</label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className='from-group'>
        <label>Email :-</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Your email"
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className='from-group'>
        <label>Type your message :-</label>
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          placeholder="Type your message here..."
        ></textarea>
        {formErrors.message && <span className="error">{formErrors.message}</span>}
        </div>
        
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
