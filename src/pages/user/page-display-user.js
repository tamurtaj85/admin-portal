import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Services } from "../../services";

export const DisplayUser = () => {
  const [users, setUsers] = useState([]);

  async function getUsersData() {
    const response = await Services.Users.getUsers();
    setUsers(await response.data);
    console.log(response);
  }

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <Container>
      {users.map((user) => {
        <Row key={user._id}>
          <Col>{user.fullName}</Col>
          <Col>{user.email}</Col>
          <Col>{user.status}</Col>
        </Row>;
      })}
    </Container>
  );
};
