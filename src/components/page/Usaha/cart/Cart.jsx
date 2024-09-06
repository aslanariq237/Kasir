// src/components/Cart.js
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import CupHolder from "./../../../../assets/cup-holder.jpeg"
import { findItems } from '../../../../url';

const Cart = () => {
  const [cart, setCart] = React.useState([]);

  const getItems = async () => {
    await axios.get(findItems)
      .then((res) => {
        let data = res.data
        setCart(data)
      }).catch(err => console.log(err.message))
  }

  useEffect(() => {
    getItems()
  }, [])
  return (
    <div className='bg-transparent py-4'>
      {
        cart.length === 0
          ?
          <div className="null bg-transparent">
            <p>Keranjang Anda Kosong</p>
          </div>
          :
          <div className="container flex space-x-3">
            {
              cart.map((i, id) => (
                <div className="carts" key={id}>
                  <div className="card border-2 rounded-lg p-2">
                    <div className="card-header py-2">
                      <p>{i.id_product.nama}</p>
                    </div>
                    <div className="card-body flex justify-between border-t-2">
                      <p>{i.id_product.harga}</p>
                      <p>{i.qty}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
      }
    </div>
  );
};

export default Cart;
