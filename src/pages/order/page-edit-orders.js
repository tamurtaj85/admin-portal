import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { useParams, useNavigate } from "react-router-dom";
import { Services } from "../../services";

export const PageEditOrders = () => {
  const [order, setOrder] = useState(null);
  const [orderItem, setOrderItem] = useState(null);
  const [product, setProduct] = useState(null);
  const [value, setValue] = useState(null);

  const { id } = useParams();

  async function getOrderInfo() {
    const response = await Services.Order.getOrderInfo(id);
    setOrder(response.data?.ORDER_DETAILS[0]);
    setProduct(response.data?.ORDER_DETAILS[1]);
    setOrderItem(response.data?.ORDER_DETAILS[2]);
    // console.log(response);
  }

  function setHeader() {
    if (!order) return <>Loading</>;
    else {
      const date = new Date(Date.parse(order.createdAt));
      //   console.log(date);
      return (
        <Col className="d-flex flex-sm-column align-items-end">
          <h6>Order ID: {`${id}`}</h6>
          <h6>
            Order Placed at:{" "}
            {`${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}
          </h6>
        </Col>
      );
    }
  }

  useEffect(() => {
    getOrderInfo();
  }, []);

  return (
    <Container>
      <Row sx={2} className="mb-5">
        <Col>
          <h1>Edit Order</h1>
        </Col>
        {setHeader()}
      </Row>
      <Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Delivery Date"
                value={order?.deliveryDate ?? ""}
                onChange={(newValue) => {
                  setValue(newValue);
                  setOrder({
                    ...order,
                    ["deliveryDate"]: newValue.toISOString(),
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Col>
          <Col className="d-flex">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(order, orderItem);
              }}
            >
              <Form.Group className="mb-3" controlId="customerID">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${order?.customerID}`}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="productName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`${product?.productName}`}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="text"
                  value={orderItem?.quantity}
                  onChange={(e) => {
                    setOrderItem({
                      ...orderItem,
                      ["quantity"]: e.target.value,
                    });
                    // console.log(value);
                  }}
                />
              </Form.Group>
              <Button type="submit">Update Order</Button>
            </Form>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
