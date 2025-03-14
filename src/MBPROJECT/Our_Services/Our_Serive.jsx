import React from 'react';



import './Our_Services.css';

function Our_Serive() {
  return (
    <div className='Home'>
    <div className='Service'>
      
{/* Our Services*/}



<div className='Service_1'>



<section className="services">
      <h2 className="services-title">SERVICES</h2>
      <div className="services-container">
        <div className="services-main">
          <h1 className="main-title">Development<br/>And<br/>Maintenance</h1>
        </div>
        <div className="services-list">
          <ul className="list-column">
            <li>Websites</li>
            <li>Sass</li>
            <li>Web Apps</li>
            <li>E-Commerce</li>
          </ul>
          <ul className="list-column">
            <li>Custom Softwares</li>
            <li>CMS</li>
            <li>Mobile Apps</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>
    </section>
    <hr className='under_line'/>
    <section className="services">
      {/* Digital Marketing Section */}
      <div className="services-container">
        <div className="services-main">
          <h1 className="main-title">Digital Marketing</h1>
        </div>
        <div className="services-list">
          <ul className="list-column">
            <li>Facebook Ads</li>
            <li>Google Ads</li>
            <li>Whatsapp Marketing</li>
            <li>Email Marketing</li>
          </ul>
          <ul className="list-column">
            <li>AI Chatbot's</li>
            <li>Google' Tags</li>
            <li>Google Analytics</li>
            <li>Social Media Marketing</li>
          </ul>
        </div>
      </div>
      <hr className='under_line'/>
      {/* Cyber Security Section */}
      <div className="services-container">
        <div className="services-main">
          <h1 className="main-title">Cyber Security</h1>
        </div>
        <div className="services-list">
          <ul className="list-column">
            <li>Web vulnerability Assessment and Penetration testing</li>
            <li>Android vulnerability Assessment and Penetration testing</li>
            <li>iOS vulnerability Assessment and Penetration testing</li>
          </ul>
        </div>
      </div>
    </section>
      <hr className='under_line'/>
  
</div>





    </div>
    </div>
  )
}

export default Our_Serive;

