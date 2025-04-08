import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MeetCard({imageLink, title, text}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageLink} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>
  );
}

export default MeetCard;