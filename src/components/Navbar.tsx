import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar } from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link  } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "./Assets/logo.png";
import { CgFileDocument } from "react-icons/cg";
import './Navbar.css';

const Navbar: React.FunctionComponent = () => {
  const [expand, updateExpanded] = useState<boolean>(false);
  const [NavColor, updatedNavbar] = useState<boolean>(false);

  function scrollHandler(){
    if(window.scrollY >= 20){
      updatedNavbar(true);
    }
    else{
      updatedNavbar(false)
    }
  }

  window.addEventListener("scroll", scrollHandler)

  return(
    <BootstrapNavbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={NavColor ? 'sticky' : 'navbar'}
    >
      <Container>
        <BootstrapNavbar.Brand href ="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="Brand" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {updateExpanded(expand ? false : 'expanded');}}
        >
          <span></span>
          <span></span>
          <span></span>
        </BootstrapNavbar.Toggle>


        <BootstrapNavbar.Collapse id='responsive-navbar-nav'>
          <Nav className="ms-auto" defaultActiveKey='#home'>
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={()=>updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px"}} />Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/About" onClick={()=>updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px"}} /> About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>

      </Container>

    </BootstrapNavbar>
   );
}

export default Navbar; 