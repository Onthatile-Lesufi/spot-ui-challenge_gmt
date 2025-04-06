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
                <Carousel.Caption>
                  <h3>Administrative Support</h3>
                  <p>Calendar management, travel planning, document creation, and data entry.</p>
                  <Link to='/contact-us'>
                    <Button id='consultation-button'>Contact Us Now</Button>
                  </Link>
                </Carousel.Caption>
                <img src={admin}/>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={support}/>
                <Carousel.Caption>
                  <h3>Customer Service Support</h3>
                  <p>Handling customer inquiries, support ticket management, phone call assistance, and live chat support.</p>
                  <Link to='/contact-us'>
                    <Button id='consultation-button'>Contact Us Now</Button>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={socials}/>
                <Carousel.Caption>
                  <h3>Social Media Management</h3>
                  <p>Creating and scheduling posts, managing engagement, and developing growth strategies for platforms like Instagram, LinkedIn, and Facebook.</p>
                  <Link to='/contact-us'>
                    <Button id='consultation-button'>Contact Us Now</Button>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={management}/>
                <Carousel.Caption>
                  <h3>Project Management</h3>
                  <p>Task tracking, deadline management, and team coordination through tools like Asana and Trello.</p>
                  <Link to='/contact-us'>
                    <Button id='consultation-button'>Contact Us Now</Button>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='carousel-item'>
                <img src={specialSupport}/>
                <Carousel.Caption>
                  <h3>Specialized Support</h3>
                  <p>Bookkeeping, CRM management, event planning, and market research.</p>
                  <Link to='/contact-us'>
                    <Button id='consultation-button'>Contact Us Now</Button>
                  </Link>
                </Carousel.Caption>
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