import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import { Product } from './pages/Product';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
