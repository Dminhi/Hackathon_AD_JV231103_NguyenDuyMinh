import { Button, Card } from "react-bootstrap";

import React from "react";

const ProductItem = ({ product, addToCart }) => (
  <Card className="mb-4">
    <Card.Img variant="top" src={product.img} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>{product.price.toLocaleString()} ₫</Card.Text>
      <Button variant="primary" onClick={() => addToCart(product)}>
        <i class="fa-solid fa-cart-shopping"></i>
        Thêm vào giỏ hàng
      </Button>
    </Card.Body>
  </Card>
);

export default ProductItem;
