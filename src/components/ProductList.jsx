import React, { useState } from "react";
import styled from "styled-components";
import ProductModal from "./Modals/ProductModal";
import ProductCard from "./ProductCard";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      <CardContainer>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDetailsClick={handleDetailsClick}
          />
        ))}
      </CardContainer>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ProductList;
