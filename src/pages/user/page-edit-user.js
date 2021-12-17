import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

import { useParams, useNavigate } from "react-router-dom";

import { Services } from "../../services";

export const PageEditUser = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    verified: "",
    role: "",
  });

  const { id } = useParams();
  const navigateTo = useNavigate();

  async function getUser() {
    const respone = await Services.Users.getUserByID(id);
    // console.log(respone);
    setUser(respone.data);
  }

  async function updateUserStatus() {
    const response = await Services.Users.updateUserInfo(id, user);

    if (response.status === 201) navigateTo("/users");
    // console.log(response);
    // console.log(user);
  }

  useEffect(() => {
    getUser();
  }, []);

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
                <Form.Control
                  type="text"
                  placeholder={`${user.fullName}`}
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${user.email}`}
                  readOnly
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formVarified">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="verified"
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
                  name="role"
                  aria-label="Select User's Role"
                  onChange={handleChange}
                  value={user.role}
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
