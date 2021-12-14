import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

import { Container } from "react-bootstrap";

import AuthServices from "../../services/service-auth";

import { useNavigate } from "react-router";

import { GenericSnackbars } from "../../components/SnackBar/component-snackbar";

const SignInInputForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [signedIn, setSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [snackBar, setSnackBar] = useState({
    state: false,
    alertMessage: "Generic Snackbar",
    severity: "primary",
  });

  const navigateTo = useNavigate();

  function handleChange(e) {
    e.preventDefault();

    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function getUserInfo() {
    const response = await AuthServices("sign-in", user);

    if (response?.code && response?.message) {
      console.log(response.code, response.message);
      // Timeout Error
    } else if (response?.status !== 200) {
      // console.log(response.data);
      setSnackBar({
        state: true,
        alertMessage: response.data,
        severity: "warning",
      });
      return;
    }

    if (response?.status === 200) {
      setSnackBar({
        state: true,
        alertMessage: "sign in successful",
        severity: "success",
      });

      setUserInfo(response.data);

      setTimeout(() => {
        navigateTo("/dashboard");
      }, 1000);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // console.log("SignIn Console: ", user);
    getUserInfo();
  }

  // useEffect(() => {
  //   setSnackBar({
  //     state: false,
  //     alertMessage: "Generic Snackbar",
  //     severity: "primary",
  //   });
  // });

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
      <GenericSnackbars snackBar={snackBar} />
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
