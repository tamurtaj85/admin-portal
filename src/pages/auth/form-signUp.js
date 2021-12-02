import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

import { Container } from "react-bootstrap";

const SignUpInputForm = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    pin: "",
  });

  function handleChange(e) {
    e.preventDefault();

    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("SignIn Console: ", user);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Fullname"
        className="mb-3"
      >
        <Form.Control
          type="text"
          name="fullName"
          placeholder="name@example.com"
          value={user.fullName}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Enter Email"
        className="mb-3"
      >
        <Form.Control
          type="email"
          name="email"
          placeholder="name@example.com"
          value={user.email}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingPassword"
        label="Enter Password"
        className="mb-3"
      >
        <Form.Control
          type="password"
          name="password"
          placeholder="****"
          value={user.password}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Enter Pin"
        className="mb-3"
      >
        <Form.Control
          type="text"
          name="pin"
          placeholder="1234"
          value={user.pin}
          onChange={handleChange}
        />
      </FloatingLabel>

      <Button className="mb-3" variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export const SignUpForm = (props) => {
  return (
    <Container className="auth-form">
      <h1 className="mb-5">Sign Up</h1>
      <SignUpInputForm />
      <h6>
        Have an account?
        <span>
          <Button
            className="bg-transparent border-0"
            style={{ color: "#fd7e14", outline: "none" }}
            onClick={props.handleClick}
          >
            Sign In
          </Button>
        </span>
      </h6>
    </Container>
  );
};
