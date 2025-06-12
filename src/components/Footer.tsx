import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';

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
                style={{color: 'red'}}
                target="_blank"
                rel="noopener noreferrer"  
              > 
                <span className="material-icons">code</span>
              </a>
            </li>
            <li className='social-icon'>
              <a 
                href="https://www.linkedin.com/in/saikrishnagr1/"
                style={{color: 'red'}}
                target="_blank"
                rel="noopener noreferrer"  
              > 
                <span className="material-icons">linkedin</span>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer; 