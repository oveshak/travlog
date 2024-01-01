import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./review.css"
import Heading from '../../common/heading/Heading';
const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Set the autoplay speed in milliseconds
      };
  return (
    <>
      <div className='container'>
      <div className='review-container'>
        <div>
            <Heading title='TESTIMONIALS' subtitle='Trust our clients'/>
        </div>
        <Slider {...settings}>
       
        <div className='slide'>
          <div>
            <img src="./images/testimonials-logo.png" alt=''/>
         </div>
         <h2><span>MARK SMITH</span> / TRAVEL ENTHUSIAST</h2>
         <div className='icon'>
            <img src='./images/star.png' alt=''/>
            <img src='./images/star.png' alt=''/>
            <img src='./images/star.png' alt=''/>
         </div>
          
            <p>Contrary to popular belief, Lorem ipsum is not simply random text . it has root in a piece of classical Latin literature from 45 BC</p>
         </div> 

         <div className='slide'>
          <div>
            <img src="./images/testimonials-logo.png" alt=''/>
         </div>
         <h2><span>MARK SMITH</span> / TRAVEL ENTHUSIAST</h2>
         <div className='icon'>
            <img src='./images/star.png' alt=''/>
            <img src='./images/star.png' alt=''/>
            <img src='./images/star.png' alt=''/>
         </div>
          
            <p>Contrary to popular belief, Lorem ipsum is not simply random text . it has root in a piece of classical Latin literature from 45 BC</p>
         </div>  

         <div className='slide'>
          <div>
            <img src="./images/testimonials-logo.png" alt=''/>
         </div>
         <h2><span>MARK SMITH</span> / TRAVEL ENTHUSIAST</h2>
         <div className='icon'>
            <img src='./images/star.png' alt=''/>
            <img src='./images/star.png' alt=''/>
            <img src='./images/star.png' alt=''/>
         </div>
          
            <p>Contrary to popular belief, Lorem ipsum is not simply random text . it has root in a piece of classical Latin literature from 45 BC</p>
         </div> 

    </Slider>
      </div>
      </div>
    </>
  )
}

export default Reviews