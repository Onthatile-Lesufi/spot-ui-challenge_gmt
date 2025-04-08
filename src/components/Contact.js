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
            <div className='contact-form-container'>
            
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

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            
        </div>
    );
}

export default Contact;