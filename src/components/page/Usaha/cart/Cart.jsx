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
          <div className="null bg-transparent text-center">
            <p>Keranjang Anda Kosong</p>
          </div>
          :
          <div className="container">
            <div className="">
              <div className="payment lg:w-2/5 border-l-2 px-5 mt-10 lg:mt-0">
              <div className="title text-center">
                <h1 className='text-2xl font-bold my-3'>Bajigur Caffe</h1>
              </div>
                {
                  cart.map((i, id) => (
                    <div className="bayar my-2 border-b-2 py-2" key={id}>
                      <div className="flex justify-between items-center">
                        <p>{i.id_product.nama}</p>
                        <div className="details text-center">
                          <p className='text-xs'>Rp. {i.id_product.harga}</p>
                          <p className='text-xs text-gray-500'>{i.qty}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
                <div className="pymnt">
                  <p className='text-xl font-bold'>Payment Choice</p>
                  <div className="opsi">
                    <div className="border-2 p-4 flex justify-around items-center">
                      <div className="input-1">
                        <input type="radio" name="p" id="" />Qris
                      </div>
                      <div className="input-2">
                        <input type="radio" name="p" id="" />Cash
                      </div>
                    </div>
                  </div>
                </div>
                <div className="harga flex justify-between">
                  <p>Total</p>
                  <p>Rp. 200.000</p>
                </div>
                <div className="sbmit">
                  <button className="bg-blue-500 mt-3 *: rounded-full h-10  w-72 flex justify-between items-center px-4">
                    <p>Bayar</p>
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
