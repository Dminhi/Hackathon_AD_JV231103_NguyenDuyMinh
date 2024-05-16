import { Col, Row } from "react-bootstrap";

import ProductItem from "./ProductItem";
import React from "react";

const ProductList = ({ products, addToCart }) => (
  <Row>
    {products.map((product) => (
      <Col md={3} key={product.id}>
        <ProductItem product={product} addToCart={addToCart} />
      </Col>
    ))}
  </Row>
);

export default ProductList;
