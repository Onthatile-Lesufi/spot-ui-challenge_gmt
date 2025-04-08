import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MeetCard({ imageLink, title, text }) {
  return (
    <Card style={{ width: "18rem", borderRadius: "22px", marginTop: "2vh" }}>
      <Card.Img variant="top" src={imageLink} style={{borderTopLeftRadius: "22px",borderTopRightRadius: "22px"}} />
      <Card.Body>
        <Card.Title style={{fontSize:'20px', fontWeight:'bold'}}>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>

        <Button
          style={{
            marginBottom: "1vh",
            backgroundColor: "#ff9a36",
            borderColor: "#ff9a36",
          }}
        >
          Contact
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MeetCard;
