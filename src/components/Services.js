import Carousel from 'react-bootstrap/Carousel';
import './css/Services.css';
import admin from './assets/images/Admin.jpg';
import support from './assets/images/CustomerSupport.jpg';
import socials from './assets/images/SocialMedia.jpg';
import management from './assets/images/Management.jpg';
import specialSupport from './assets/images/SpecialSupport.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Services () {
    return (
        <div className='services-page-container'>
            <h2 id='page-title'>Our Services</h2>

            <Carousel className='services-carousel'>
              <Carousel.Item className='carousel-item'>
                <img src={admin}/>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={support}/>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={socials}/>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={management}/>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={specialSupport}/>
              </Carousel.Item>
            </Carousel> 

            <h3></h3>
            <p></p>
            <Link to='/contact-us'>
                <Button id='consultation-button'>Book a Consultation</Button>
            </Link>
        </div>
    );
}

export default Services;