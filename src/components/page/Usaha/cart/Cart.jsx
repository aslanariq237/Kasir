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
  
  const total = cart.reduce((total, cart) => {
    return total + cart.id_product.harga
  }, 0)

  useEffect(() => {
    getItems()
  }, [])
  return (
    <div className="payment lg:w-2/5">
      {
        cart.length === 0
          ?
          <div className="text-center">
            <p>Keranjang Anda Kosong</p>
          </div>
          :
          <div className="container">
            <div className="struk border-l-2 px-4">
              <div className="head flex justify-center">
                <p className='text-2xl font-bold my-3'>Bright Coffe</p>
              </div>
              <div className="body">
                {cart.map((li, i) => (
                  <div className="card" key={i}>
                    <div className="card-header flex justify-between border-b-2 py-2 items-center">
                      <div className="title">
                        <p>{li.id_product.nama}</p>
                      </div>
                      <div className="details">
                        <div className="sub-title">
                          <p>Rp. {li.id_product.harga}</p>
                        </div>
                        <div className="qty">
                          <p className='text-center text-sm'>{li.qty}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="method">
                  <p className='py-2'>Metode Payment</p>
                  <div className="choose flex justify-around py-2 border-2">
                    <div className="cash">
                      <input type="radio" name="Cash" id="" />Cash
                    </div>
                    <div className="Qris">
                      <input type="radio" name="Qris" id="" />Qris
                    </div>
                  </div>
                </div>
                <div className="submit py-2">
                  <button type="submit" className='w-full flex justify-between px-3 py-1 bg-gray-300 rounded-lg mt-3'>
                    <p className='font-semibold'>Bayar</p>
                    <p>Rp. {total}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  );
};

export default Cart;
