import React, { FC }from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IconBaseProps } from "react-icons";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/avatar.png";

const Home2: React.FC = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell in love with programming. I've learned a lot, grown even more, 
              and there's no stopping now.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript and TypeScript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Language Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Angular</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                 <a 
                href="https://github.com/gongireddysr"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: 'white'}}  
                className="icon-colour home-social-icons"
              > 
                {React.createElement(AiFillGithub as FC<IconBaseProps>, { color: "white" })}
              </a>
              </li>
              <li className="social-icons">
              <a 
                href="https://www.linkedin.com/in/saikrishnagr1/"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
                >  
                {React.createElement(FaLinkedinIn as FC<IconBaseProps>, { color: "white" })}
              </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
    </Container>
  );
};

export default Home2; 