import './css/Contact.css';
import { Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function Contact () {
    const [show, setShow] = useState(false);
    const [beenShown, setBeenShown] = useState(false);

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
                <Modal.Footer>
                    <Button className='action-button' onClick={handleClose}>
                        Take Offer
                    </Button>
                </Modal.Footer>
            </Modal>

            
            <h2 id='page-title'>Contact Us</h2>

        </div>
    );
}

export default Contact;