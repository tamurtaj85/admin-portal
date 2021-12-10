import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

// Importing Icons
import ModeEditIcon from "@mui/icons-material/ModeEdit";

// Importing service
import { Services } from "../../services";

// import { ACTION_TYPE } from "../../redux/products/action-types-products";
// import { store } from "../../store";

// Table headings
const tableHeadings = [
  "",
  "Name",
  "Brand",
  "Price",
  "Quantity",
  "Category",
  "Status",
];

export const PageDisplayProduct = () => {
  const [products, setProducts] = useState([]);

  async function getProductsData() {
    const response = await Services.Product.GetProducts();
    setProducts(response.data);
    // console.log(response);
  }

  useEffect(() => {
    getProductsData();
    // store.dispatch({ type: [ACTION_TYPE.GET] });
    // setProducts(store.getState());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mb-5">Products</h1>
        </Col>
        <Col className="d-sm-flex justify-content-end align-items-start">
          <Button>
            <Link
              to="/add-product"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add Product +
            </Link>
          </Button>
        </Col>
      </Row>
      <Table hover>
        <thead>
          <tr>{SetTableHeading(tableHeadings)}</tr>
        </thead>
        <tbody>{SetTableData(products)}</tbody>
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
  return data.map((product) => {
    return (
      <tr key={product._id}>
        <td>
          <Link to={`/edit-product/${product._id}`}>
            <ModeEditIcon style={{ color: "#F45118" }} />
          </Link>
        </td>
        <td>{product.productName}</td>
        <td>{product.productBrand}</td>
        <td>{product.productPrice}</td>
        <td>{product.productQuantity}</td>
        <td>{product.productCategory}</td>
        <td>{product.productStatus.toUpperCase()}</td>
        <td></td>
      </tr>
    );
  });
};
