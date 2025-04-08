import './css/Contact.css';
import { Button, Modal, Form, Accordion } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function Contact () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setTimeout(() => {handleShow()},3000);
    }, [])

    return (
        <div>
            <Modal id='consultation-modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Free Consultation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Get a free 30-minute consultation to discuss how we can assist you.</Modal.Body>
                <div className='modal-input-container'>
                    <Form.Control className='modal-input' type="text" placeholder="Phone Number" />
                    <Form.Control className='modal-input' type="text" placeholder="Email" />
                </div>
                
                <Modal.Footer>
                    <Button className='action-button' onClick={handleClose}>
                        Take Offer
                    </Button>
                </Modal.Footer>
            </Modal>

            <h2 className='contact-page-title'>Contact Us</h2>
            <div id='contact-form-container'>
            
                <Form className='contact-form'>
                    <Form.Group className="mb-3 contact-input-group" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 contact-input-group" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 contact-input-group" controlId="formBasicEmail">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Company Name" />
                    </Form.Group>

                    <Form.Select id='contact-select' aria-label="Default select example">
                      <option>Type of Service Needed</option>
                      <option value="1">Administrative Support</option>
                      <option value="2">Customer Support</option>
                      <option value="3">Social Media</option>
                      <option value="4">Project Management</option>
                      <option value="5">Other...</option>
                    </Form.Select>

                    <div className='contact-check'>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="I'd like to receive email updates with discounts, event information, brand updates and new products"
                        />
                    </div>
                    

                    <Form.Group className="mb-3 submit-group">
                        <Button className='action-button submit-button' type="submit">
                            Submit
                        </Button>
                        <br/>
                        <Form.Text>
                            We'll never share your information with anyone else.
                        </Form.Text>
                    </Form.Group>

                </Form>
            </div>
            

            <div id='faq-container'>
                <h3 className='contact-page-title'>FAQ</h3>

                <Accordion className='faq-accordion'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How do I make a purchase?</Accordion.Header>
                        <Accordion.Body>
                            To make a purchase, use one the following methods as followed:
                            <ul>
                                <li>Fill out the <a href='#contact-form-container'>above fields</a> with the relevant information and wait for one of our consultants to reach out with an invoice and the proceeding steps in the process.</li>
                                <li>Book one of our free 30 minute consultations in which one of our consultants will match you with the relevant services for your specific needs.</li>
                                <li>Contact us directly either by emailing us at <a href='mail.google.com'>example@example.co.za</a> or by calling one of our telecommunication specialists at 0000000000.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>When will my payment method be charged</Accordion.Header>
                        <Accordion.Body>
                            Upon paying your initial invoice, billing periods will vary depending on your own specific situations and the decision made between you and the consultant attending to you.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Between what hours will your services be available?</Accordion.Header>
                        <Accordion.Body>
                            Thanks to the global nature of our consultants and call centers, Great Minds Technologies is operational at 24/7.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How do I unsubscribe from the Great Minds Technologies mailing list?</Accordion.Header>
                        <Accordion.Body>
                            To unsubscribe from our mailing list, use one the following methods as followed:
                                <ul>
                                    <li>Fill out the <a href='#contact-form-container'>above fields</a> with the relevant information (Select "Other..." under services) and wait for one of our consultants to reach out. From there, make your intention to unsubscribe clear. After receiving a confirmation email, you should no longer receive our miscellaneous emails.</li>
                                    <li>Contact us directly either by emailing us at <a href='mail.google.com'>example@example.co.za</a> or by calling one of our telecommunication specialists at 0000000000.</li>
                                </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>How will I be able to cancel my service plan?</Accordion.Header>
                        <Accordion.Body>
                            To cancel your service plan, use one the following methods as followed:
                                <ul>
                                    <li>Fill out the <a href='#contact-form-container'>above fields</a> with the relevant information (Select "Other..." under services) and wait for one of our consultants to reach out. From there, make your intention to cancel clear. After receiving a confirmation email, you should no longer be billed for our services and will no longer receive correspondence from our consultants.</li>
                                    <li>Contact us directly either by emailing us at <a href='mail.google.com'>example@example.co.za</a> or by calling one of our telecommunication specialists at 0000000000.</li>
                                </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            
        </div>
    );
}

export default Contact;