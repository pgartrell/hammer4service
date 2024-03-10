import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbarcss.css';
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.png"

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" className="navbar"> 
        <Container>
        <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              className="logo--image d-inline-block align-top"
            />
          </Navbar.Brand>
            <Navbar.Brand 
              href="/" 
              className='logo--title'>
                  Hammer4Service, LLC
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">        
            <Nav className="ms-auto">
              <Link to="/" className="navbar--links">Home</Link>
              <Link to="/gallery" className="navbar--links">Gallery</Link>
              <Link to="/quote" className="navbar--links">Get a Quote</Link>

              {/* <Link className="navbar--links" href="#home">Home</Link>
              <Link className="navbar--links"href="#features">Gallery</Link>
              <Link className="navbar--links"href="#pricing">Get a Quote</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>  
      </Navbar>  
    </>
  )
}
export default NavBar


