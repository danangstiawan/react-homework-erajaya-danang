import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const ProductImage = styled.img`
  max-width: 100px; /* Lebar maksimum 100px */
  height: auto;
  margin: 0 auto; /* Menengahkan gambar */
`;

const ProductModal = ({ product, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <h2>{product.name}</h2>
        <ProductImage src={product.imageUrl} alt={product.name} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>Quantity: {product.quantity}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProductModal;
