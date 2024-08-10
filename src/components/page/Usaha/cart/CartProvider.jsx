// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../select/Main';
import { CartProvider } from './CartContext';

const CartPro = () => {
  return(
    <CartProvider>
      <Main />
    </CartProvider>
  )
}
export default CartPro