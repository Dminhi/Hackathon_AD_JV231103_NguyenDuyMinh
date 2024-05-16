import { Button, ListGroup, Modal } from "react-bootstrap";

import CartItem from "./CartItem";
import React from "react";

const Cart = ({
  cart,
  show,
  handleClose,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p>Chưa có sản phẩm trong giỏ hàng</p>
        ) : (
          <ListGroup>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeItem={removeItem}
              />
            ))}
          </ListGroup>
        )}
        <h5 className="mt-3">Tổng tiền: {total.toLocaleString()} ₫</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
