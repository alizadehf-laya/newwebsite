import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slidebar from '../slidebar/Slidebar';

function Home() {
  return (
    <Container fluid >
      <Row>
        <Col lg={3} md={3}  sm={3}  className='p-0 m-0 '><Slidebar height={"100vh"}/></Col>
        <Col lg={9} md={9}  sm={9} style={{border: " 1px solid red"}} >1 of 1</Col>
      </Row>

    </Container>
  );
}

export default Home;