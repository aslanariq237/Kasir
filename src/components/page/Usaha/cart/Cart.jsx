// src/components/Cart.js
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { deleteCarts, findItems, postPay } from '../../../../url';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = React.useState([]);
  const [idCart, setIdCart] = React.useState([]);
  const navigate = useNavigate();

  const getItems = async () => {
    await axios.get(findItems)
      .then((res) => {
        let data = res.data
        setCart(data)        
      }).catch(err => console.log(err.message))
  }

  const total = cart.reduce((total, cart) => {
    const x = cart.id_product.harga * cart.qty    
    return total + x    
  }, 0)

  const deleteCart = async() => {
    await axios.delete(deleteCarts)
    .then((res) => {
      console.log(res)
    }).catch(err => console.log(err))
  }

  const createPayment = async(e, cart) => {
    e.preventDefault()
    const elements = e.target.elements
    // const CartId = JSON.stringify(elements.id_cart.value)

    try{
      await axios.post(postPay, {
        nama: elements.nama.value,
        // id_cart : CartId,
        id_cart : elements.id_cart.value[0],      
        total: total,
        metode_payment : elements.metode_payment.value == 0 ? 'cash': 'qris',
        status_payment: elements.metode_payment.value == 0 ? 'Sudah di bayar':'Belum di bayar'     
      })
        .then(function(e) {
          console.log('Berhasil Menyimpan Data');
          deleteCart();
          navigate('/select');
      }) 
        .catch((err) => console.log(err))
    }catch(err){
      console.log({errorMessage: err})
    }
  }

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
              <form onSubmit={createPayment}>
                <div className="body">
                  <input type="text" name='nama' placeholder='Nama' className='w-full px-2 py-1'/>
                  {cart.map((li, i) => (
                    <div className="card" key={i}>
                      <input 
                        type="hidden" 
                        name='id_cart' 
                        className='text-xs'                         
                        value={li._id}
                      />                      
                      <div className="card-header flex justify-between border-b-2 py-2 items-center">
                        <div className="title">
                          <p>{li.id_product.nama}</p>
                        </div>
                        <div className="details">
                          <div className="sub-title">
                            {/* <p>Rp. {li.id_product.harga}</p> */}
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
                    <select name="metode_payment" id="" className='w-full'>
                      <option value="0">Cash</option>
                      <option value="1">Qris</option>
                    </select>                  
                  </div>
                  <div className="submit py-2">
                    <button type="submit" className='w-full flex justify-between px-3 py-1 bg-gray-300 rounded-lg mt-3'>
                      <p className='font-semibold'>Bayar</p>
                      <p>Rp. {total}</p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
      }
    </div>
  );
};

export default Cart;
