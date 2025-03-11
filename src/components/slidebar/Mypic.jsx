import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Mypic() {
    const mypicstyle={
        width:"150px",
         height:"150px",
          border:"10px solid rgb(55,55,55)",
          
        

    }
  return (

    <Container className='d-flex justify-content-center align-items-center' >
      <Row >

        <Col xs={6} md={4}>
          <Image style={mypicstyle} src="/images/helia.jpg" className='mt-2' roundedCircle />
        </Col>

      </Row>
    </Container>
  );
}

export default Mypic;