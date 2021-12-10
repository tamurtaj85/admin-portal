import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

import { Services } from "../../services/index";

import { useNavigate, useParams } from "react-router-dom";

export const PageEditProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    productImg: "",
    productPrice: "",
    productQuantity: "",
    productBrand: "",
    productDescription: "",
    productStatus: "",
    productCategory: "",
  });

  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  const navigateTo = useNavigate();

  async function getProductByID() {
    const response = await Services.Product.GetProductByID(id);

    if (response.status === 200) setProduct(response.data);
    // console.log("ByID: ", response);
  }

  async function getCategories() {
    const response = await Services.Categories.getCategories();
    setCategories(response.data);
    // console.log("Categories: ", response.data);
  }

  async function updateProduct() {
    const response = await Services.Product.UpdateProduct(id, product);
    // console.log("Product Console: ", response);

    if (response.status === 200) navigateTo("/products");
  }

  async function deleteProduct() {
    const response = await Services.Product.DeleteProduct(id);
    // console.log("DeleteProduct:", response);

    if (response.status === 200) navigateTo("/products");
  }

  useEffect(() => {
    getProductByID();
    getCategories();
  }, []);

  function handleChange(e) {
    e.preventDefault();

    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Product update: ", product);
    updateProduct();
  }

  return (
    <Container>
      <Row>
        <h1>Add Product</h1>
      </Row>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                onChange={handleChange}
                value={product.productName}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formProductBrandName">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                name="productBrand"
                onChange={handleChange}
                value={product.productBrand}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select
                className="mb-3"
                aria-label="Default select category"
                name="productCategory"
                onChange={handleChange}
                value={product.productCategory}
              >
                <option>Select Category</option>
                {categories.map((item) => (
                  <option
                    value={`${item._id}`}
                    key={`${item._id}`}
                  >{`${item.parentCategory}`}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="productPrice"
                onChange={handleChange}
                value={product.productPrice}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formProductQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                name="productQuantity"
                onChange={handleChange}
                value={product.productQuantity}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select
                className="mb-3"
                aria-label="Default select status"
                name="productStatus"
                onChange={handleChange}
                value={product.productStatus}
              >
                <option value="In Production">In Production</option>
                <option value="Discontinued">Discontinued</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Image Path/URL</Form.Label>
              <Form.Control
                type="text"
                name="productImg"
                onChange={handleChange}
                value={product.productImg}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formProductDescription">
            <Form.Label>Description/Specs</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Add the product description here."
              name="productDescription"
              onChange={handleChange}
              value={product.productDescription}
            />
          </Form.Group>
        </Row>
        <Row>
          <Col xs={1}>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
          <Col>
            <Button variant="danger" type="button" onClick={deleteProduct}>
              Delete
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
