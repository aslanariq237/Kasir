// src/App.js
import React from 'react';
import Select from './Select';
import Cart from '../cart/Cart';

const Main = () => {
  return (
    <div>
      <h1>eCommerce Site</h1>
      <Select/>
      <Cart />
    </div>
  );
};

export default Main;