import IconInsa from "./IconInsta";
import Github from "./Github";
import Linkedin from "./Linkedin";
import Facebook from "./Facebook";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Radius } from "lucide-react";

function Icons() {
  const IconRound={
    width:"35px",
     height:"35px",
      backgroundColor:" rgb(55,55,55)",
      borderRadius:"100%",
      margin:"0"  
    }
 
  return (
    <Container  >
      <Row className="d-flex flex-nowrap justify-content-center m-0 p-0">
        <Col style={{margin:"0 ",padding:"0"}}>
          <div style={IconRound} className='d-flex justify-content-center align-items-center m-0'>
          <IconInsa/>
          </div>
        </Col>
        <Col  style={{margin:"0",padding:"0"}} >
          <div style={IconRound} className='d-flex justify-content-center align-items-center  m-0'>
            <Github/>
            </div>
        </Col>
        <Col   style={{margin:"0",padding:"0"}} >
          <div style={IconRound} className='d-flex justify-content-center align-items-center m-0'>
            <Linkedin/>
            </div>
        </Col>
        <Col   style={{margin:"0",padding:"0"}}>
        <div style={IconRound} className='d-flex justify-content-center align-items-center m-0'>
          <Facebook/>
          </div>
          </Col>
        <Col   style={{margin:"0",padding:"0"}} >
        <div style={IconRound} className='d-flex justify-content-center align-items-center m-0'>
          <IconInsa/>
          </div>
          </Col>

      </Row>
    </Container>
  );
}

export default Icons;