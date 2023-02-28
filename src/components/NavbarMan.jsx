import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';

const NavbarMan = () => {
  const location = useLocation();

if(location.pathname === "/register" || location.pathname === "/login" || location.pathname === "/registerSuccess") {
  return null
}

    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Benz-Coding24</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" active={() => {
                if(location.pathname === "/") {
                  return true 
                }else{
                  return false
                }
              }}>Aufträge</Nav.Link>
              <Nav.Link href="/customer" active={() => {
                if(location.pathname === "/customer") {
                  return "true" 
                }else{
                  return "false"
                }
              }}>Kunden</Nav.Link>
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Hilfe</Nav.Link>
              <Nav.Link eventKey={2} onClick={() => {
                localStorage.removeItem("jwt-token");
                window.location.reload(false);
              }}>
                Ausloggen
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default NavbarMan;