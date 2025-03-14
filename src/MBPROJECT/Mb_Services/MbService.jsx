

import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Fotter/Fotter.jsx';





import './MbService.css';

// Importing the Slick Carousel CSS


// Importing images


function MbSerivece() {
   
    return (
        <div className='Home'>
            <Header />
            {/* Carousels starting */}
            <div className='Mbservice_img'>
                <h1>OUR_SERVICES</h1>
            </div>

        

         {/* Cards Section Starting*/}   

        {/*Service*/}

     <div className='md'>
    
    <h3>Services</h3>

    <div className='mdo1'>Transform your business</div>
    <div className='mdo2'>challenges into<span style={{color:'black', marginTop:-50}}> opportunities
with our </span>
               innovative services.</div>
              
   </div>




 {/* Our Values Section Starting*/}   

 
<div className='App_delopment'>

<div className='App_delopment1'>
<img  src='app3.jpg' alt="" />
</div>
<div className='App_delopment2'>
 <h1 className='app-head'>WEB DEVELOPMENT</h1>
  <p>The right web development design is the beginning of substantial ROI. Whether you are looking for a trusted partner or a high-quality, robust, and custom end-to-end development service to increase the agility of your website, you are here. Our solutions produce scalable, responsive, user-friendly, and SEO-friendly websites to boost operability, revenue, and customer experience.</p>
  <div className='iro'>
<div className='iro1'>
  <li>Python</li>
  <li>NodeJS</li>
  <li>WordPress</li>
  <li>Mysql</li>
</div>
<div className='iro2'>
  <li style={{}}>PHP</li>
  <li>ReactJS</li>
  <li>Oracle</li>
  <li>Java</li>
  
</div>
</div>
</div>

</div>





 
<div className='App_delopment'>

<div className='App_delopment1'>
<img  src='app.jpg' alt="" />
</div>
<div className='App_delopment2'>
 <h1 className='app-head'>Mobile App Development</h1>
  <p>Our world has 83.4% mobile users; businesses need a superior mobile app functional on all platforms. As brands/companies navigate the turbulent waters of the digital ecosystem, they need robust, engaging, practical mobile applications to capture the demographic. Our mobile development solutions will enable you to make informed decisions across all platforms.</p>
  <div className='iro'>
<div className='iro1'>
  <li>Ionic</li>
  <li>React Native</li>
</div>
<div className='iro2'>
  <li>Flutter</li>
  <li>Swift</li>
 
  
</div>
</div>
</div>

</div>






 
<div className='App_delopment'>

<div className='App_delopment1'>
<img  src='app2.jpg' alt="" />
</div>
<div className='App_delopment2'>
 <h1 className='app-head'>UI/UX Design</h1>
  <p>The best designs communicate your customer's emotions and enhance their experience as they navigate your website. Designs are simply visual aids that boost a brand's digital impression, but good businesses know that designs without the UI/UX impact are a waste of time. At Cyber Nest, we do not believe in simple designs but offer aesthetical concepts that sell your brand to the customer while telling a story.</p>
  <div className='iro'>
<div className='iro1'>
  <li>Figma</li>
  <li>Adobe Xd</li>
  <li>Sketch</li>
</div>
<div className='iro2'>
  <li>Adobe Photoshop</li>
  <li>Illustrator</li>
  <li>Spline</li>
 
  
</div>
</div>
</div>

</div>




 
<div className='App_delopment'>

<div className='App_delopment1'>
<img  src='app1.jpg' alt="" />
</div>
<div className='App_delopment2'>
 <h1 className='app-head'>Digital Marketing</h1>
  <p>Digital marketing is your trusted partner in digital marketing excellence. With a proven track record of driven results for businesses of all sizes, we specelize in delivering tailored strategies that elevate your online presence and maximize ROI. From SEO and PPC to soical media managment and content marketing, and drive conversions.</p>
  <div className='iro'>
<div className='iro1'>
  <li>Facebook Ads</li>
  <li>Google Ads</li>
  <li>Whatsapp Marketing</li>
  <li>Logo Design's</li>
</div>
<div className='iro2'>
  <li>Brochure Design's</li>
  <li>Google Tag's</li>
  <li>Google Analytic's</li>
  <li>AI Chatbot's</li>
 
  
</div>
</div>
</div>

</div>










{/*Revels Section */}






{/* Home page Starting*/}











            <Fotter/>
        </div>
    );
}

export default  MbSerivece;
