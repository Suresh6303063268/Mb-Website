import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Fotter/Fotter.jsx';
import MainHome from '../Home/MainHome/MainHome.jsx';
import OurService from '../Our_Services/Our_Serive.jsx';
import ClientReview from '../Client_Reviews/Client.jsx';
import Slider from 'react-slick';

import './Home.css';

// Importing the Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
    const handleClick = () => {
        
      };
    




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };

    return (
        <div className='Home'>
            <Header />
            {/* Carousels starting */}
            <div className='Carsols Section'>
                <Slider {...settings}>
                    <div className='car_img'>
                        <img src='Mb2.jpg' alt="Education Slide 1" />
                    </div>
                    <div  className='car_img'>
                        <img src='Mb.png' alt="Education Slide 2" />
                    </div>
                    <div  className='car_img'>
                        <img src='Mb1.jpg' alt="Education Slide 3" />
                    </div>
                    <div  className='car_img'>
                        <img src='Mb3.jpg' alt="Education Slide 1" />
                    </div>
                </Slider>
            </div>



            {/* Cards Section Starting */}
          
<MainHome/>

<OurService/>
            {/* Our Values Section Starting */}
            


            {/* Home page Starting */}
            <div className='Our_Contact'>
                <div className='Our_Contact1'>
                    <h1>Corporate Software Training</h1>
                    <p>Elevate Your Team with   Maawaabro' IT Solutions's Corporate Training Programs. We  offers tailored corporate training programs to enhance the skills and efficiency of your workforce. Our specialized courses are designed to meet the demands of the ever-evolving corporate landscape, ensuring your team stays ahead in the competitive market.</p>
                    <button onClick={handleClick}>
                        Learn More
                    </button>
                </div>

                <div className='Our_Contact2'>
                    <img src='Mb1.jpg' alt="Education Slide 1" />
                </div>
            </div>

           <ClientReview/>
          
            <Fotter />
        </div>
    );
}

export default Home;
