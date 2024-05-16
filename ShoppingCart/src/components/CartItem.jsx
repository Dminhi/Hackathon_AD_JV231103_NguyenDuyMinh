import {
  Button,
  Col,
  FormControl,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";

import React from "react";

const CartItem = ({
  item,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) => (
  <ListGroup.Item>
    <Row>
      <Col>
        <img width={80} height={80} src={item.img} alt="" />
      </Col>
      <Col>{item.name}</Col>
      <Col>{item.price.toLocaleString()} ₫</Col>
      <Col>
        <InputGroup>
          <Button
            variant="outline-secondary"
            onClick={() => decrementQuantity(item.id)}
          >
            -
          </Button>
          <FormControl value={item.quantity} readOnly />
          <Button
            variant="outline-secondary"
            onClick={() => incrementQuantity(item.id)}
          >
            +
          </Button>
        </InputGroup>
      </Col>
      <Col>
        <Button>
          <i
            onClick={() => removeItem(item.id)}
            className="fa-solid fa-trash-can"
          ></i>
        </Button>
      </Col>
    </Row>
  </ListGroup.Item>
);

export default CartItem;
