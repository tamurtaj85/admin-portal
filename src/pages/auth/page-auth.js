import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./auth-styles.scss";

import { SignInForm } from "./form-signIn";
import { SignUpForm } from "./form-signUp";

import ImageContainer from "../../components/ImageContainer/component-image";
import r_mini_img from "../../assests/imgs/R.png";

export const PageAuth = () => {
  const [signedIn, setSignedIn] = useState(true);

  function toggleAuthPage() {
    setSignedIn(!signedIn);
  }

  function renderAuthPages() {
    if (signedIn) return <SignInForm handleClick={toggleAuthPage} />;
    else return <SignUpForm handleClick={toggleAuthPage} />;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vw-100 vh-100">
      <Row xs={2} className="w-100">
        <Col className="my-auto">
          <h1 className="text-center">
            Welcome to R Mini <br /> Admin Portal
          </h1>
          <ImageContainer
            path={r_mini_img}
            alt_txt="r-mini-image"
            imgShape="rounded"
          />
        </Col>
        <Col className="my-auto">{renderAuthPages()}</Col>
      </Row>
    </Container>
  );
};
