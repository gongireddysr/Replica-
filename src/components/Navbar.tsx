import React, { useState, useEffect } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "../assets/logo.png";
import { CgFileDocument } from "react-icons/cg";
import { IconBaseProps } from 'react-icons';
import './Navbar.css';

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  const [expand, updateExpanded] = useState<boolean>(false);
  const [navColor, updatedNavbar] = useState<boolean>(false);

  const scrollHandler = (): void => {
    if (window.scrollY >= 20) {
      updatedNavbar(true);
    } else {
      updatedNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const iconProps: IconBaseProps = {
    size: 20,
    color: "#333"
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => { updateExpanded(!expand); }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: "5px", display: 'flex', alignItems: 'center' }}>
                    {React.createElement(AiOutlineHome, iconProps)}
                  </span>
                  <span>Home</span>
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/About" onClick={() => updateExpanded(false)}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: "5px", display: 'flex', alignItems: 'center' }}>
                    {React.createElement(AiOutlineUser, iconProps)}
                  </span>
                  <span>About</span>
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 