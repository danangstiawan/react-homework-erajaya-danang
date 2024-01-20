import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Menengahkan horizontal */
  padding: 16px; /* Menambahkan padding */
`;

const SearchInput = styled.input`
  padding: 8px;
  margin-right: 8px;
`;

const SearchButton = styled.button`
  padding: 8px;
  background-color: ${(props) => (props.reset ? '#e53935' : '#4caf50')}; 
  border: none;
  color: #fff;
  cursor: pointer;
  margin-left: ${(props) => (props.reset ? '8px' : '0')}; 
`;

const ProductSearch = ({ onSearch, onReset }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleReset = () => {
    setSearchQuery("");
    onReset();
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      <SearchButton onClick={handleReset} reset>Reset</SearchButton>
    </SearchContainer>
  );
};

export default ProductSearch;
