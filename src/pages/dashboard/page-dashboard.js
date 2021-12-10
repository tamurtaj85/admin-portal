import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CategoryChart } from "./configs-category";

const mValue = 1;
const pValue = 3;

export const PageDashboard = () => {
  return (
    <Container>
      <h1 className="mb-5">Dashboard</h1>
      <Row>
        <Col
          className={`border border-secondary rounded m-${mValue} p-${pValue}`}
        >
          <h3>Products</h3>
          {/* <Bar data={ChartData} /> */}
        </Col>
        <Col
          className={`border border-secondary rounded m-${mValue} p-${pValue}`}
        >
          <h3>Categories</h3>
          {/* <CategoryChart /> */}
        </Col>
        <Col
          className={`border border-secondary rounded m-${mValue} p-${pValue}`}
        >
          <h3>Users</h3>
          {/* <Doughnut data={ChartData} /> */}
        </Col>
        <Col
          className={`border border-secondary rounded m-${mValue} p-${pValue}`}
        >
          <h3>Orders</h3>
          {/* <Doughnut data={ChartData} /> */}
        </Col>
      </Row>
    </Container>
  );
};
