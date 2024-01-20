import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 200px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const DetailButton = styled.button`
  background-color: #007bff; /* Warna biru */
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

const AddToCartButton = styled.button`
  background-color: #28a745; /* Warna hijau */
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

const ProductCard = ({ product, onDetailsClick }) => {
  const navigate = useNavigate();
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...existingCart, product];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };
  return (
    <CardContainer>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <DetailButton onClick={() => onDetailsClick(product)}>
        Lihat Detail
      </DetailButton>
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </CardContainer>
  );
};

export default ProductCard;
