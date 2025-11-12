import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';


function Navbars() {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Text Count</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars
