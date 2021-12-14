import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

// Importing Icons
import ModeEditIcon from "@mui/icons-material/ModeEdit";

// Importing service
import { Services } from "../../services";

// import { ACTION_TYPE } from "../../redux/orders/action-types-orders";
// import { store } from "../../store";

// Table headings
const tableHeadings = [
  "",
  "Placed at",
  "Delivery date",
  "Product",
  "Quantity",
  "Place by",
  "Order type",
];

export const PageDisplayOrders = () => {
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [orderTableData, setOrderTableData] = useState([]);
  const [orderTable, setOrderTable] = useState([]);

  async function getOrdersList() {
    const response = await Services.Order.getOrdersList();
    // console.log("OrdersResponse: ",response);
    setOrders(response.data[0]);
    setOrderItems(response.data[1]);
  }

  // Will render only for the first render (i.e. after page refresh)
  useEffect(() => {
    getOrdersList();
  }, []);

  // will render only whenever the orderItems value is being changed
  useEffect(() => {
    getOrderObject();
  }, [orderItems]);

  function getOrderObject() {
    const data = orderItems.map((item, index) => {
      return {
        ...item,
        ...orders[index],
      };
    });
    setOrderTableData(data);
    // console.log(orderTableData);
  }

  // async function getDataTable() {
  //   const data = await SetTableData(orderTableData);
  //   setOrderTable(data);
  //   console.log("TableData: ", orderTable);
  // }

  // useEffect(() => {
  //   getDataTable();
  // }, [orderTableData]);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-5">Orders</h1>
        </Col>
      </Row>
      <Table hover>
        <thead>
          <tr>{SetTableHeading(tableHeadings)}</tr>
        </thead>
        <tbody>
          {/* {orderTable.map((order) => {
            return order;
          })} */}
          {SetTableData(orderTableData)}
        </tbody>
      </Table>
    </Container>
  );
};

const SetTableHeading = (headings = []) => {
  return headings.map((heading) => {
    return <th>{heading}</th>;
  });
};

const SetTableData = (data) => {
  return data.map((order) => {
    return (
      <tr key={order._id}>
        <td>
          <Link to={`/edit-order/${order._id}`}>
            <ModeEditIcon style={{ color: "#F45118" }} />
          </Link>
        </td>
        <td>{order.createdAt?.slice(0, 10)}</td>
        <td>{order.deliveryDate?.slice(0, 10)}</td>
        <td>{order.productID}</td>
        <td>{order.quantity}</td>
        <td>{order.customerID}</td>
        <td>{order.orderType}</td>
      </tr>
    );
  });
};

const ProductService = async (pID) => {
  const response = await Services.Product.GetProductByID(pID);
  return response.data;
};

const UserService = async (uID) => {
  const response = await Services.Users.getUserByID(uID);
  return response.data;
};
