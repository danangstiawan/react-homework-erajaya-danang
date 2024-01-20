import React, { useState } from "react";
import ProductList from "../components/ProductList";
import ProductSearch from "../components/ProductSearch";
import { itemsForSearchTest } from "../data/ProductData";

export const Product = () => {
  const [filteredProducts, setFilteredProducts] = useState(itemsForSearchTest);

  const handleSearch = (query) => {
    const filtered = itemsForSearchTest.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleReset = () => {
    // Logika reset pencarian
    // Misalnya, mengembalikan daftar produk ke nilai awal
    setFilteredProducts(itemsForSearchTest);
  };

  return (
    <div>
      <ProductSearch onSearch={handleSearch} onReset={handleReset} />
      <ProductList products={filteredProducts} />
    </div>
  );
};
