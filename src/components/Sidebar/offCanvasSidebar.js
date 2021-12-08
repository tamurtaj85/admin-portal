import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

export const OffCanvasSidebar = () => {
  return (
    <Navbar className="mb-5" bg="light" expand={false}>
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
            <Nav className="justify-content-end ps-5">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/orders">Orders</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="#">R Mini | Admin Portal</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
