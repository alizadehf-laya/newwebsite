import { ButtonGroup } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

function ButtonSlider() {
  return (
    <ListGroup className='mt-2' style={{backgroundColor:"rgb(29,28,28)", border:"no-border"}}>
      <ListGroup.Item style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>Home</ListGroup.Item>
      <ListGroup.Item  style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>About Us</ListGroup.Item>
      <ListGroup.Item  style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>Contact Me</ListGroup.Item>
      <ListGroup.Item  style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>Profile</ListGroup.Item>
      <ListGroup.Item  style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>Resume</ListGroup.Item>
      <ListGroup.Item  style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>More</ListGroup.Item>
    </ListGroup>
  );
}

export default ButtonSlider;