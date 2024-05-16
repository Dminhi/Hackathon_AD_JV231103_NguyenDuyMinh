import { Badge, Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

import React from "react";

const Header = ({ cart, handleShowCart }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
      <Navbar.Brand href="#home" className="ms-3">
        <img
          alt=""
          src="https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795_640.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Your Brand
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
        </Nav>
        <Form className="d-flex me-3">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav>
          <Button onClick={handleShowCart} variant="outline-light">
            <i className="fas fa-shopping-cart"></i> Cart{" "}
            <Badge bg="secondary">{cart.length}</Badge>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
