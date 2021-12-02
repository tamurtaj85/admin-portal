import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

import { Container } from "react-bootstrap";

import AuthServices from "../../services/service-auth";

const SignInInputForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    e.preventDefault();

    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function getUserInfo() {
    const response = await AuthServices("sign-in", user);

    console.log(response);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("SignIn Console: ", user);
    getUserInfo();
  }

  return (
    <Form onSubmit={handleSubmit}>
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
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
      </FloatingLabel>

      <Button className="mb-3" variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
};

export const SignInForm = (props) => {
  return (
    <Container className="auth-form">
      <h1 className="mb-5">Sign In</h1>
      <SignInInputForm />
      <h6>
        Don't have an account?
        <span>
          <Button
            className="bg-transparent border-0"
            style={{ color: "#fd7e14", outline: "none" }}
            onClick={props.handleClick}
          >
            Sign Up
          </Button>
        </span>
      </h6>
    </Container>
  );
};
