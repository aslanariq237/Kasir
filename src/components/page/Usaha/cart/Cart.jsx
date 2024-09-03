// src/components/Cart.js
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import CupHolder from "./../../../../assets/cup-holder.jpeg"
import { item, pelanggan } from '../../../../url';

const Cart = () => {
  const [cart, setCart] = React.useState([]);

  const getCart = async () => {
    axios.get(item)
      .then((res) => {
        const data = res.data
        setCart(data)
      }).catch(e => console.log(e))
  }

  useEffect(() => {
    getCart()
  }, [])
  return (
    <div className='bg-transparent'>
      {
        cart.length === 0
          ?
          <div className="null bg-transparent"></div>
          :
          <div className='fixed bottom-0 w-full bg-green-500 p-3 rounded-tr-3xl rounded-tl-3xl'>
            {cart.map((i, id) => (
              <button className="w-full" key={id}>
                <div className="nam flex justify-between">                  
                  <p>Bayar Satu Barang</p>
                  <p>{cart.length}</p>
                </div>
              </button>
            ))}
          </div>
      }
    </div>
  );
};

export default Cart;
