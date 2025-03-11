

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mypic from './mypic';
import Icons from './Iconslucude/Icons';
import ButtonSlider from './ButtonSlider';



function Slidebar( props) {
  const myStyle = {
    padding:"3px",
    backgroundColor: "rgb(29, 28, 28)",
    widths:"100%",
      justifyContent:"center",
      height:`${props.height}`,
      overflowX:"hidden"
  
  };
  return (
    <Container noGutters >
      <Row style={myStyle} >
        <Col xs={12} style={{padding:"0"}}><Mypic/></Col>
        <h5 style={{color:"white"}} className='text-center mt-1'> Laya Alizadeh</h5>
       <Icons/>
       <ButtonSlider/>
      </Row>
    </Container>
  );
}

export default Slidebar;