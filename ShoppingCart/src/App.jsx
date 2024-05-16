import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductData from "./data/ProductData.json";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    setProducts(ProductData);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleCloseCart = () => setShowCart(false);

  const incrementQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity - 1;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  return (
    <Container>
      <Row className="mt-4">
        <Header
          cart={cart}
          show={showCart}
          handleClose={handleCloseCart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
          handleShowCart={handleShowCart}
        />
      </Row>
      <div className="mt-5"></div>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        show={showCart}
        handleClose={handleCloseCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
      />
    </Container>
  );
}

export default App;
