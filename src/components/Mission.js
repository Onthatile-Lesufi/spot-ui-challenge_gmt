import { Container, Row, Col } from "react-bootstrap";
import missionImg from "./assets/images/Management.jpg";

function Mission() {
  return (
    <div
      style={{
        height: "70vh",
        backgroundColor: "#5160A5",
        alignContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col
            md={5}
            style={{
              color: "white",
              textAlign: "left",
              marginTop: "auto",
              marginBottom: "auto",
              padding: "5vh",
            }}
          >
            <h1
              style={{
                marginBottom: "5vh",
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              Our Mission
            </h1>
            <p style={{ fontSize: "18px", letterSpacing: "1.5px" }}>
              Our mission is to help businesses and entrepreneurs streamline
              their operations by providing reliable, flexible, and efficient
              virtual assistant services
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={6} style={{ backgroundColor: "#5160A5" }}>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={missionImg}
                alt="Mission"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Mission;
