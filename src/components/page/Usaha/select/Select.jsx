import React, { useContext, useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from "axios";
import { product, postCart, findItems } from "../../../../url";
import { Link } from "react-router-dom";
import Control from "../../../../assets/cup-holder.jpeg"
import { Cart } from "../..";

const Select = () => {
    const [item, setItem] = useState([]);
    const [count, setCount] = React.useState([]); 

    const getItems = async () => {
        axios.get(product)
            .then((res) => {
                const data = res.data
                setItem(data)
            })
    }

    const findItems = async () => {
        await axios.get(findItems)
            .then((res) => {
                let data = res.data
                setCount(data)
            }).catch(err => console.log(err.message))
    }


    const addCart = async (e) => {
        e.preventDefault()
        const elements = e.target.elements

        try {
            await axios.post(postCart, {
                id_product: elements.id_product.value,
                qty: elements.qty.value
            })
                .then(function (e) {
                    console.log('Berhasil Menambahkan Data')
                }).catch((er) => console.log(er))
        } catch (e) {
            console.log({ errorMessage: e })
        }
    }

    useEffect(() => {
        getItems();
        findItems()
    }, [])

    return (
        <div className="my-5">
            <div className="cont mb-5 w-full">
                <p className="text-center">Pilih Produk di Bawah ini</p>
                <div className="produks flex flex-wrap justify-between">
                    {item.length === 0
                        ?
                        <div className="container">
                            <p className="text-center">Item Belum Tersedia</p>
                        </div>
                        :
                        item.map((li, i) => (
                            <div className="card p-2 rounded-md shadow-xl w-24 lg:w-44" key={i}>
                                <div className="card-footer">
                                    <Popup
                                        trigger={
                                            <div className="">
                                                <div className="card-header">
                                                    <img className="rounded-lg" src={Control} alt="" />
                                                </div>
                                                <div className="card-body flex justify-center">
                                                    <p className="font-bold text-xs text-center">{li.nama}</p>
                                                </div>
                                            </div>
                                        } modal>
                                        <div className="cart lg:flex lg:flex-col items-center">
                                            <p className="text-sm">apakah anda ingin Menambahkan barang ini?</p>
                                            <div className="cart mt-2">
                                                <form className="" onSubmit={addCart}>
                                                    <div className="input">
                                                        <div className="id">
                                                            <input
                                                                name="id_product"
                                                                className="text-xs"
                                                                type="hidden"
                                                                value={li._id}
                                                            />
                                                        </div>
                                                        <div className="qty flex justify-between">
                                                            <p className="text-xs">{li.nama}</p>
                                                            <input
                                                                className="shadow-md rounded-md w-full"
                                                                name="qty"
                                                                type="number"
                                                                // value={rowSelect && rowSelect.qty ? rowSelect.qty : ''}                                                                
                                                                min={1}
                                                            />
                                                        </div>
                                                    </div>
                                                    <button className="bg-green-400 w-full mt-2 rounded-lg" type="submit">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </Popup>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                count.length == undefined
                    ?
                    <div className="">
                        <p>kosong</p>
                    </div>
                    :
                    <Link to={'/cart'}>
                        <div className="button flex justify-center items-center">
                            <button className="bg-blue-500 fixed bottom-1 rounded-full h-10 lg:h-16  w-72 flex justify-between items-center px-4">
                                <p>Bayar</p>
                                <p>Rp. 20.000</p>
                            </button>
                        </div>
                    </Link>
            }
        </div>
    )
}
export default Select