import { Container, Row } from "react-bootstrap";


function ListItems() {
  return (
    <div>
      <Container style={{width:'60%'}}>
        <Row style={{alignItems:'center', margin:'0', marginTop:'25px'}}><h1 style={{fontWeight:'bold'}}>Why Choose Us?</h1></Row>
        <Row style={{justifyContent:'left', textAlign:'left', alignItems:'center', margin:'0', marginTop:'25px'}}>
          <div style={{width: '50px',height: '50px',backgroundColor: '#5160A5',borderRadius: '50%',}}></div>
          <p style={{margin:'0', fontSize:'24px', color:'black', fontWeight:'bold', width:'auto'}}>Professional and skilled VAs ready to assist you</p>
        </Row>
        <Row style={{justifyContent:'right', textAlign:'right', alignItems:'center', margin:'0', marginTop:'25px'}}>
          <p style={{margin:'0', fontSize:'24px', color:'black', fontWeight:'bold', width:'auto'}}>Flexible service plans based on client needs</p>
          <div style={{width: '50px',height: '50px',backgroundColor: '#5160A5',borderRadius: '50%',}}></div>
        </Row>
        <Row style={{justifyContent:'left', textAlign:'left', alignItems:'center', margin:'0', marginTop:'25px'}}>
          <div style={{width: '50px',height: '50px',backgroundColor: '#5160A5',borderRadius: '50%',}}></div>
          <p style={{margin:'0', fontSize:'24px', color:'black', fontWeight:'bold', width:'auto'}}>Transparent pricing with no hidden fees</p>
        </Row>
      </Container>
    </div>
  );
}

export default ListItems;
