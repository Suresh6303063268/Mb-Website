import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Fotter/Fotter.jsx';


import MainAbout from '../About/about_main.jsx';

import './About.css';

// Importing the Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function About() {
   



    
    return (
        <div className='Home'>
            <Header />


            <div className='About_img'>
                <h1>About Us</h1>
            </div>

           



            {/* Cards Section Starting */}
          



            {/* Our Values Section Starting */}
            


            {/* Home page Starting */}
          

           <MainAbout/>
          
            <Fotter />
        </div>
    );
}

export default About;
