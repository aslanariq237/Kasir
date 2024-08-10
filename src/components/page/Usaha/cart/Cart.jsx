// src/components/Cart.js
import React, { useContext } from 'react';
import CupHolder from "./../../../../assets/cup-holder.jpeg"
import { CartContext } from './CartContext';

const Cart = () => {
  // const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const cart = [
    {
      id_produk: 1,
      nama_produk: "cup-holder",
      harga_produk: 50000,
      foto_produk: CupHolder
  }
  ]
  return (
    <div className=''>      
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className='fixed bottom-0 w-full bg-green-500 p-3 rounded-tr-3xl rounded-tl-3xl'>
          {cart.map((i, id) => (
            <button className="w-full" key={id}>
              <div className="nam flex justify-between">
                <h3>{i.nama_produk}</h3>
                <p>{i.harga_produk}</p>
              </div>                   
            </button>
          ))}
          {/* {cart.map(item => (
            <div key={item.id}>
              <h3>{item.nama_produk}</h3>
              <p>Price: ${item.harga_produk}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))} */}
          {/* <button>Clear Cart</button> */}
          {/* <button onClick={clearCart}>Clear Cart</button> */}
        </div>
      )}
    </div>
  );
};

export default Cart;
