import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home2: React.FC = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home2; 