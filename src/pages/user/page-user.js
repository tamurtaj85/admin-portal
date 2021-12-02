import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

import { DisplayUser } from "./page-display-user";

export const PageUser = () => {
  // function handleClick() {}

  return (
    <DisplayUser />
    // <Container>
    //   <Row>
    //     <Col>
    //       <Button type="button" variant="primary">
    //         Edit User
    //       </Button>
    //     </Col>
    //   </Row>
    // </Container>
  );
};
