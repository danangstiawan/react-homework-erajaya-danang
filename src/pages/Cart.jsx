import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const CartContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CartHeader = styled.h2`
  color: #333;
  text-align: center;
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CartItem = styled.li`
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemName = styled.p`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  color: #555;
  margin: 5px 0;
`;

const ItemQuantity = styled.p`
  font-size: 14px;
  color: #777;
  margin: 5px 0;
`;

const TotalPrice = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: #2c82c8;
  }
`;

const ClearCartButton = styled(Button)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

const BackButton = styled(Button)`
  background-color: #2ecc71;

  &:hover {
    background-color: #27ae60;
  }
`;

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const navigate = useNavigate();

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 0) + 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 0) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const calculateItemTotalPrice = (item) => {
    return (item.price || 0) * (item.quantity || 0);
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + calculateItemTotalPrice(item),
      0
    );
  };

  return (
    <CartContainer>
      <CartHeader>Shopping Cart</CartHeader>
      <BackButton onClick={() => navigate("/")}>
        Lanjutkan Berbelanja
      </BackButton>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <CartList>
          {cart.map((item, index) => (
            <CartItem key={index}>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>${item.price}</ItemPrice>
              <ItemQuantity>Quantity: {item.quantity || 0}</ItemQuantity>
              <TotalPrice>Total: ${calculateItemTotalPrice(item)}</TotalPrice>
              <Button onClick={() => handleIncrement(index)}>+</Button>
              <Button onClick={() => handleDecrement(index)}>-</Button>
              <Button onClick={() => handleRemoveItem(index)}>
                Remove Item
              </Button>
            </CartItem>
          ))}
        </CartList>
      )}
      <TotalPrice>Total Price: ${calculateTotalPrice()}</TotalPrice>
      <ClearCartButton onClick={handleClearCart}>Clear Cart</ClearCartButton>
    </CartContainer>
  );
};

export default Cart;
