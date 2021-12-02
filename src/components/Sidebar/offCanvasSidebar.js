import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

export const OffCanvasSidebar = () => {
  return (
    <Navbar className="mb-3" bg="light" expand={false}>
      <Container fluid>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Navbar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link>{<Link to="/dashboard">Dashboard</Link>}</Nav.Link>
              <Nav.Link>{<Link to="/products">Products</Link>}</Nav.Link>
              <Nav.Link>{<Link to="/users">Users</Link>}</Nav.Link>
              <Nav.Link>{<Link to="/orders">Orders</Link>}</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="#">R Mini | Admin Portal</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
