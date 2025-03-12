import { ButtonGroup } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { House } from 'lucide-react';
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { FileUser } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';

function ButtonSlider() {
  return (
    <ListGroup className='border-0' style={{backgroundColor:"rgb(29,28,28)"}}>
      <ListGroup.Item className='border-0' style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>
        <House/><span  className='ms-3'>Home</span></ListGroup.Item>
      <ListGroup.Item className='border-0' style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>
        <User/><span  className='ms-3'>About</span></ListGroup.Item>
      <ListGroup.Item className='border-0' style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>
        <Mail/><span  className='ms-3'>Contact</span></ListGroup.Item>
      <ListGroup.Item className='border-0' style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>
        <FileUser/><span  className='ms-3'>Portfolio</span></ListGroup.Item>
      <ListGroup.Item className='border-0' style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>
        <Newspaper/><span  className='ms-3'>Resume</span></ListGroup.Item>
      <ListGroup.Item className='border-0' style={{backgroundColor:"rgb(29,28,28)", color:"white"}}>
        <EllipsisVertical/><span  className='ms-3'>More</span></ListGroup.Item>
    </ListGroup>
  );
}

export default ButtonSlider;