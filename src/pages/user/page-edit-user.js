import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

export const PageEditUser = () => {
  const [user, setUser] = useState({
    verified: Boolean,
    userRole: String,
  });

  async function updateUserStatus() {}

  function handleChange(e) {
    e.preventDefault();

    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateUserStatus();
  }

  return (
    <Container>
      <Row>
        <h1>User Controll Panel</h1>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder={`${"demo1"}`} readOnly />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder={`${"demo2"}`} readOnly />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formVarified">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  aria-label="Select User's Profile Status"
                  onChange={handleChange}
                  value={user.verified}
                >
                  <option>Select User's Profile Status</option>
                  <option value={true}>Verified</option>
                  <option value={false}>Not Verified</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  aria-label="Select User's Role"
                  onChange={handleChange}
                  value={user.userRole}
                >
                  <option>Select User's Role</option>
                  <option value="Super User">Super User</option>
                  <option value="Sales Agent">Sales Agent</option>
                  <option value="Consumer">Consumer</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Update User
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
