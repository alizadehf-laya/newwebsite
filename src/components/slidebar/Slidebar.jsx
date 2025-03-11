

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mypic from './mypic';
import Icons from './Iconslucude/Icons';



function Slidebar( props) {
  const myStyle = {
    padding:"3px",
    backgroundColor: "rgb(29, 28, 28)",
    widths:"100%",
      justifyContent:"center",
      height:`${props.height}`
  
  };
  return (
    <Container noGutters >
      <Row style={myStyle} >
        <Col xs={12} style={{padding:"0"}}><Mypic/></Col>
        <h5 style={{color:"white"}} className='text-center mt-1'> Laya Alizadeh</h5>
       <Icons/>
      </Row>
    </Container>
  );
}

export default Slidebar;