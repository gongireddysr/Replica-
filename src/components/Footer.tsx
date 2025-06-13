import React, { FC } from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import { IconType, IconBaseProps } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className="footer-copyright">
          <h3>Designed and Developed by Sai Krishna</h3>
        </Col>
        <Col md='4' className='footer-copyright'>
          <h3>Copyright © {year} SK</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icon'>
              <a 
                href="https://github.com/gongireddysr"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"  
              > 
                {React.createElement(AiFillGithub as FC<IconBaseProps>, { size: 24, color: "white" })}
              </a>
            </li>
            <li className='social-icon'>
              <a 
                href="https://www.linkedin.com/in/saikrishnagr1/"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer">  
                {React.createElement(FaLinkedinIn as FC<IconBaseProps>, { size: 24, color: "white" })}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer; 