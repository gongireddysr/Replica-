import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github'
import LaptopImg from '../Assets/about.png'


const About: React.FC = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{justifyContent:"center", padding:"10px"}}>
          <Col md={7} style={{justifyContent:"center", paddingTop:"30px", paddingBottom:"50px"}}>
            <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About; 