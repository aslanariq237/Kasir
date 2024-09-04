import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../cart/CartContext";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from "axios";
import { postCart, product } from "../../../../url";

const Select = () => {
    const [item, setItem] = useState([]);
    const [rowSelect, setRowSelect] = useState([])

    const getItems = async () => {
        const itemData = axios.get(product)
            .then((res) => {
                const data = res.data
                // console.log(data);
                setItem(data)
            })
    }
    const addCart = async (e) => {
        e.preventDefault()
        await axios.post(postCart, {
            id_product: rowSelect._id,
            qty: rowSelect.qty
        })
            .then(function () {
                console.log('Berhasil Menambahkan Data')
            }).catch((e) => console.log(e))
        // const updatedCart = [...cart, item];
        // setCart(updatedCart);
        // localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    const handleChange = (e) => {
        setRowSelect({
            ...rowSelect,
            [e.target.name]: e.target.value
        })
    }

    // const getCart = () => {
    //     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    //     setCart(storedCart);
    // }

    // const clearCart = () => {
    //     const clear = localStorage.clear();
    //     setCart(clear)
    // }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <div className="mt-3">
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
                                    <Popup                                         
                                        trigger={
                                        <button
                                            className="bg-green-400 rounded-lg p-1 w-full"
                                        >Tambah</button>                                    
                                    } modal>
                                        <div className="cart">
                                            <p className="text-sm">apakah anda ingin Menambahkan barang ini?</p>
                                            <div className="card mt-2">
                                                <div className="card-body">
                                                    <form className="flex flex-col justify-center items-center" onSubmit={addCart}>
                                                        <div className="p">
                                                            <input
                                                                type="hidden"
                                                                name="_id"
                                                                value={rowSelect && rowSelect._id ? li._id : li._id}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="input-qty flex justify-between items-center">
                                                                <p className="text-xs">{li.nama}</p>
                                                                <input
                                                                    className="h-8 w-20 shadow-md rounded-md"
                                                                    name="qty"
                                                                    type="number"
                                                                    value={rowSelect && rowSelect.qty ? rowSelect.qty : ''}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <button type="submit">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </Popup>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <button className="fixed bottom-1 bg-blue-400 w-80 px-5 rounded-md">
                <p>Lihat Cart</p>
            </button> */}
        </div>
    )
}
export default Select