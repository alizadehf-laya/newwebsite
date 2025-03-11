import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slidebar from '../slidebar/Slidebar';

function Home() {
  return (
    <Container fluid >
      <Row >
        <Col lg={3} md={3}  sm={3} style={{border: " 1px solid red"}}><Slidebar/></Col>
        <Col lg={9} md={9}  sm={9} style={{border: " 1px solid red"}}>1 of 1</Col>
      </Row>

    </Container>
  );
}

export default Home;