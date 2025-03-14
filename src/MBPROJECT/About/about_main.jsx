// AboutMain.js
import React from 'react';
import './about_main.css';
import DraftsIcon from '@mui/icons-material/Drafts';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
// Adjust the path based on where your image is located



const AboutMain = () => {
  return (
    <div className='Main-About'>
      {/* About Section */}
      <div className='about-1'>
        <h1>ABOUT US</h1>
        <p>We are Sharp. We are Smart
         We are Great to work with.</p>
        <img src='about11.jpg' alt="Our Team" />
      </div>

      {/* Values Section */}
      <div className='values'>
        <h2>OUR VALUES</h2>
        <h3>
          When all the parts come together, extraordinary <br /> things can happen.
        </h3>
        <p>
          To us, world-class digital products take more than intelligent code or creative design. It requires true partnership between the ideators and the innovators. Our collaborations are built on a bedrock of transparency, communication, expert project management, and attention to detail.
        </p>
      </div>

      {/* Services Section */}
      <div className='service'>
        <div className='service1'>
          <div className='ser1'>
            <h3>Integrity</h3>
            <p>
              Acting with strong ethics is a priority for everyone representing the organization and the company’s behavior.
            </p>
          </div>
          <div className='ser2'>
            <h3>Honesty</h3>
            <p>
              It's not just the best policy. It's a core business practice that earns the respect of colleagues in a trustworthy manner.
            </p>
          </div>
          <div className='ser3'>
            <h3>Accountability</h3>
            <p>
              Accepting responsibility for your actions (and inactions) is the ultimate way to build trust internally and externally.
            </p>
          </div>
        </div>

        <div className='service2'>
          <div className='ser1'>
            <h3>Diversity</h3>
            <p>
              Organizations succeed by bringing different lived experiences into a shared environment.
            </p>
          </div>
          <div className='ser2'>
            <h3>Teamwork</h3>
            <p>
              When people work together, they can create something greater than themselves as individuals.
            </p>
          </div>
          <div className='ser3'>
            <h3>Quality</h3>
            <p>
              Companies are judged by the craftsmanship of their products and services, so the highest standards must be maintained.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className='heading'>
        <h2>
          Ready to bring your idea to the digital world?
          <br />
          Get a free consultation.
        </h2>
        <div className='head'>
          <button>LET'S GET CONNECTED</button>
        </div>
      </div>

      {/* Contact Icons Section */}
      <div className='icons'>
        <div className='icon'>
          <DraftsIcon className='draft-icon' />
          <p className='contact-info'>info@maawaabroitsolutions.com</p>
        </div>

        <div className='icon2'>
          <LocationOnIcon className='location-icon' />
          <p className='contact-info'>Viganan's Foundation for Science, Technolgy and Reaserch (Deemed to be University). Vadlamudi, N-block 2nd floor TBI Guntur-522213</p>
        </div>

        <div className='icon3'>
          <CallIcon className='call-icon' />
          <p className='contact-info'>Phone: +8639023948, +91 7671829282</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
