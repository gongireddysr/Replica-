import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from "../../assets/home-main.png";
import Particle from '../Particle';
import Type from "./Type";
import Home2 from "./Home2";

const Home: React.FC = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SAI KRISHNA</strong>
              </h1>

              <div style={{ 
                padding: 50, 
                textAlign: "left",
                minHeight: "100px",
                display: "flex",
                alignItems: "center"
              }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
};

export default Home; 