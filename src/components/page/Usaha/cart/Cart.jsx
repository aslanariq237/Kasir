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
  
  const total = 

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
                          <p>{li.id_product.harga}</p>
                        </div>
                        <div className="qty">
                          <p className='text-center'>{li.qty}</p>
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
                <div className="submit">
                  <button type="submit" className='w-full bg-gray-300 rounded-md mt-3'>Bayar</button>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
    // <div className='bg-transparent py-4'>
    //   {
    //     cart.length === 0
    //       ?
    //       <div className="null bg-transparent text-center">
    //         <p>Keranjang Anda Kosong</p>
    //       </div>
    //       :
    //       <div className="container">
    //         <div className="">
    //           <div className="payment lg:w-2/5 border-l-2 px-5 mt-10 lg:mt-0">
    //           <div className="title text-center">
    //             <h1 className='text-2xl font-bold my-3'>Bajigur Caffe</h1>
    //           </div>
    //             {
    //               cart.map((i, id) => (
    //                 <div className="bayar my-2 border-b-2 py-2" key={id}>
    //                   <div className="flex justify-between items-center">
    //                     <p>{i.id_product.nama}</p>
    //                     <div className="details text-center">
    //                       <p className='text-xs'>Rp. {i.id_product.harga}</p>
    //                       <p className='text-xs text-gray-500'>{i.qty}</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))
    //             }
    //             <div className="pymnt">
    //               <p className='text-xl font-bold'>Payment Choice</p>
    //               <div className="opsi">
    //                 <div className="border-2 p-4 flex justify-around items-center">
    //                   <div className="input-1">
    //                     <input type="radio" name="p" id="" />Qris
    //                   </div>
    //                   <div className="input-2">
    //                     <input type="radio" name="p" id="" />Cash
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="harga flex justify-between">
    //               <p>Total</p>
    //               <p>Rp. 200.000</p>
    //             </div>
    //             <div className="sbmit">
    //               <button className="bg-blue-500 mt-3 *: rounded-full h-10  w-72 flex justify-between items-center px-4">
    //                 <p>Bayar</p>
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //   }
    // </div>
  );
};

export default Cart;
