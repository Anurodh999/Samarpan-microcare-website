import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Visual from "../../icons/Visual.png";
import Ellipse from "../../icons/Ellipse.png";
import flag from "../../icons/flag.png";
import Vector from "../../icons/Vector.png";
import homeicon from "../../icons/homeicon.png";
import groupicon from "../../icons/groupicon.png";
import Purposeful from "../../icons/Purposeful.png";
import ana from "../../icons/ana.png";
import fin from "../../icons/Financial Growth Analysis.png";
import graph from "../../icons/graph.png";
import './nav.css'

import "./nav.css";
const NavBar = () => {
    return (
        <>
      <Navbar collapseOnSelect expand="lg" className='header-bg'>
      <Container>
      {/* <Image src={Visual} rounded  /> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar-nav1">
          <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Nav>
          <Nav>
          <Image src={flag} rounded  className='navbar-nav2'/>
            <Image src={Ellipse} rounded />
            <NavDropdown title="Anurodh" id="basic-nav-dropdown" className='navbar-nav4'>
              <NavDropdown.Item href="#action/3.1">User Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <Image src={Vector} rounded className='navbar-nav3'/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Image src={homeicon} rounded />
        <NavDropdown title="Dashboards" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">N/A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                N/A
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                N/A
              </NavDropdown.Item>
            </NavDropdown>
            <Image src={groupicon} rounded />
        <NavDropdown title="Analytics" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">N/A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                N/A
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                N/A
              </NavDropdown.Item>
            </NavDropdown>
            <Image src={ana} rounded />
        <NavDropdown title="Data Managment" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">User Inputs Category</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              User Inputs Content
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Image src={Purposeful} rounded />
        <NavDropdown title="Category Matrix" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">N/A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                N/A
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                N/A
              </NavDropdown.Item>
            </NavDropdown>
            <Image src={fin} rounded />
        <NavDropdown title="Competitor Analysis" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">N/A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                N/A
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                N/A
              </NavDropdown.Item>
            </NavDropdown>
            <Image src={graph} rounded />
        <NavDropdown title="Strategy & Scenarion" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">N/A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                N/A
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                N/A
              </NavDropdown.Item>
            </NavDropdown>
        </Container>
      </Navbar>
      </>
    );
};

export default NavBar;