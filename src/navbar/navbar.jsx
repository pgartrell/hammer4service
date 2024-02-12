import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbarcss.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {

  const [show, setHide] = useState(false);

  const handleClose = () => setHide(false);

  return (
    <>
      <Navbar collapseOnSelect expand="md" className="navbar bg-body-tertiary" bg="dark" data-bs-theme="dark"> 
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="../src/assets/logo2.png"
              width="100"
              height="50"
              className="logo--image d-inline-block align-top"
            />
          </Navbar.Brand>
          <Offcanvas show={show} onHide={handleClose} responsive="sm">
            <Navbar.Brand href="#home" className='.d-none .d-sm-block logo--title'>Hammer4Service</Navbar.Brand>
          </Offcanvas>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">        
            <Nav className="ms-auto">
              <Nav.Link className="navbar--links" href="#home">Home</Nav.Link>
              <Nav.Link className="navbar--links"href="#features">Gallery</Nav.Link>
              <Nav.Link className="navbar--links"href="#pricing">Get a Quote</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>  
      </Navbar>

    </>
  )
}

export default NavBar