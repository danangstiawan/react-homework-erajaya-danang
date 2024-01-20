import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import { Product } from './pages/Product';

const App = () => {

  console.log("OKEEEE")

  return (
    <Router basename="/react-homework-erajaya-danang">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
