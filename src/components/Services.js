import Carousel from 'react-bootstrap/Carousel';
import './css/Services.css';
import admin from './assets/images/Admin.jpg';
import support from './assets/images/CustomerSupport.jpg';
import socials from './assets/images/SocialMedia.jpg';
import management from './assets/images/Management.jpg';
import specialSupport from './assets/images/SpecialSupport.jpg';
import { Button } from 'react-bootstrap';

function Services () {
    return (
        <div className='services-page-container'>
            <h2>Our Services</h2>

            <Carousel className='services-carousel'>
              <Carousel.Item className='carousel-item'>
                <img src={admin}></img>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={support}></img>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={socials}></img>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={management}></img>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={specialSupport}></img>
              </Carousel.Item>
            </Carousel> 

            <Button>Book a Consultation</Button>
        </div>
    );
}

export default Services;