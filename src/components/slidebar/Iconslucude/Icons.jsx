import IconInsa from "./IconInsta";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Radius } from "lucide-react";

function Icons() {
  const IconRound={
    width:"50px",
     height:"50px",
      backgroundColor:" rgb(55,55,55)",
      borderRadius:"100%"
      
    

}
  return (
    <Container >
      <Row>
        <Col><div style={IconRound} className='d-flex justify-content-center align-items-center'><IconInsa/></div></Col>
        <Col><div style={IconRound} className='d-flex justify-content-center align-items-center'><IconInsa/></div></Col>
        <Col><div style={IconRound} className='d-flex justify-content-center align-items-center'><IconInsa/></div></Col>
        <Col><div style={IconRound} className='d-flex justify-content-center align-items-center'><IconInsa/></div></Col>
        <Col><div style={IconRound} className='d-flex justify-content-center align-items-center'><IconInsa/></div></Col>

      </Row>
    </Container>
  );
}

export default Icons;