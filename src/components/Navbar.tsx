import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
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

function Navbar (){
  const [expand, updateExpanded] = useState<boolean>(false);
  const [NavColor, updatedNavbar] = useState<boolean>(false);
}

export default Navbar; 