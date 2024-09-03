import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../cart/CartContext";
import axios from "axios";
import { product } from "../../../../url";

const Select = () => {
    const [item, setItem] = useState([]);
    const [cart, setCart] = useState([]);

    const getItems = async () => {
        const itemData = axios.get(product)
            .then((res) => {
                const data = res.data
                // console.log(data);
                setItem(data)
            })
    }
    const addCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const getCart = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log(storedCart)
        setCart(storedCart);     
    }

    const clearCart = () => {
        const clear = localStorage.clear();
        setCart(clear)
    }
    


    useEffect(() => {
        getItems();
        getCart();
    }, [1])

    return (
        <div className="">
            <div className="cont mb-5 w-full">
                <p className="text-center">Pilih Produk di Bawah ini</p>
                <div className="produks flex flex-wrap">
                    {item.length === 0
                        ?
                        <div className="container">
                            <p className="text-center">Item Belum Tersedia</p>
                        </div>
                        :
                        item.map((li, i) => (
                            <div className="card p-2 rounded-md shadow-xl w-40" key={i}>
                                <div className="card-header">
                                    <p className="p">{li.nama}</p>
                                </div>
                                <div className="card-body flex justify-between">
                                    <p>$.{li.harga}</p>
                                    <p>{li.stok}</p>
                                </div>
                                <div className="card-footer">
                                    <button
                                        className="bg-green-400 rounded-lg p-1 w-full"
                                        value={li.id}
                                        onClick={() => addCart(li)}
                                    >Tambah</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                cart.length === 0
                    ?
                    ''
                    :
                    <div className="coba fixed w-5 h-5 rounded-full bg-green-400">
                        <p>{cart.length}</p>
                    </div>
                    // cart.map((li, i) => (
                    //     <div className="coba fixed bottom-1 bg-green-300" key={i}>
                    //         <p>{li.length}</p>
                    //     </div>
                    // ))                    
            }
        </div>
    )
}
export default Select