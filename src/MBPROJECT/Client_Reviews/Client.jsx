import React from 'react';
import Slider from 'react-slick';
import './Client.css';  // Assume this is where your custom CSS is

const reviews = [
    {
        name: 'K. Krishna Rao',
        stars: 5,
        review: 'Best In Service. Actually I need to make an Website and App related to my business. Whenever I reach the company they receive very well and completed the Project.'
    },
    {
        name: 'Konda Guravaiah',
        stars: 5,
        review: 'Best In Service. Excellent Work as always! Very cooperative, helpful, punctual to the schedule, and great quality of work. The process was seamless and delivered on time. It was great working with them.'
    },
    {
        name: 'G. Surya',
        stars: 5,
        review: 'Providing best output for clients And good Customer Support. Good service No 1 best services. The team handles the task as per our requirements and Satisfy With the Performance.'
    }
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="client">
             <h1>CLIENT REVIEWS</h1>
             <p>The Reviews Of Our Clients Will Say More About Us Than We About Our Services.</p>


        <div className="carousel">
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="carousel-item">
                        <h3 className="client-name">{review.name}</h3>
                        <div className="star-rating">
                            {'★'.repeat(review.stars)}
                        </div>
                        <p className="review-text">{review.review}</p>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
    );
};

export default Carousel;
