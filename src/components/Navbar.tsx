import React, { useState, useEffect, FC } from 'react';
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

const NavigationBar: React.FC = () => {
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

  const handleToggleClick = (): void => {
    updateExpanded(!expand);
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
          onClick={handleToggleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link as any} to="/" onClick={() => updateExpanded(false)}>
                {React.createElement(AiOutlineHome as FC<IconBaseProps>, { style: { marginBottom: "2px" } })} Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link as any} to="/About" onClick={() => updateExpanded(false)}>
                {React.createElement(AiOutlineUser as FC<IconBaseProps>, { style: { marginBottom: "2px" } })} About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link as any} to="/Projects" onClick={() => updateExpanded(false)}>
                {React.createElement(AiOutlineFundProjectionScreen as FC<IconBaseProps>, { style: { marginBottom: "2px" } })} Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link as any} to="/Resume" onClick={() => updateExpanded(false)}>
                {React.createElement(CgFileDocument as FC<IconBaseProps>, { style: { marginBottom: "2px" } })} Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 