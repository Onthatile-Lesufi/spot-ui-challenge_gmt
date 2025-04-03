import { Container, Row, Col } from 'react-bootstrap';
import missionImg from './assets/images/Management.jpg'


function Mission() {
return (
    <div style={{height:'60vh', backgroundColor:'#5160A5', alignContent:'center'}}>
    <Container>
        <Row>
            <Col md={5} style={{ backgroundColor: '#000000', color:'white', textAlign:'left' }}>
                <h1>Our Mission</h1>
                <p>Our mission is to help businesses and entrepreneurs streamline their operations by providing reliable, flexible, and efficient virtual assistant services</p>
            </Col>
            <Col md={1}></Col>
            <Col md={6} style={{ backgroundColor: '#5160A5' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#ffffff' }}><img src={missionImg} alt="Mission" style={{ width: '100%', height: '100%' }} /></div>
            </Col>
        </Row>
    </Container>
    </div>
);
}
export default Mission;