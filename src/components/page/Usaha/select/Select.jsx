import React, { useContext, useEffect, useState } from "react";
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
        console.log(rowSelect)
        if (!rowSelect.id_product || !rowSelect.qty) {
            console.log('ID product or qty are not available')
            return;
        }       

        // try{
        //     await axios.post(postCart, {
        //         id_product: rowSelect._id,
        //         qty: rowSelect.qty
        //     })
        //         .then(function (e) {
        //             console.log('Berhasil Menambahkan Data')
        //             console.log(e)
        //         }).catch((er) => console.log(er))
        // }catch(e) {
        //     console.log({errorMessage : e})
        // }
    }

    const handleChange = (e) => {
        setRowSelect({
            ...rowSelect,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getItems();        
    }, [])

    return (
        <div className="mt-3">
            <div className="cont mb-5 w-full">
                <p className="text-center">Pilih Produk di Bawah ini</p>
                <div className="produks flex flex-wrap justify-center">
                    {item.length === 0
                        ?
                        <div className="container">
                            <p className="text-center">Item Belum Tersedia</p>
                        </div>
                        :
                        item.map((li, i) => (
                            <div className="card p-2 rounded-md shadow-xl w-40" key={i}>
                                <div className="card-header">
                                    <p className="font-semibold">{li.nama}</p>
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
                                        <div className="cart lg:flex lg:flex-col items-center">
                                            <p className="text-sm">apakah anda ingin Menambahkan barang ini?</p>
                                            <div className="cart mt-2">
                                                <form className="" onSubmit={addCart}>
                                                    <div className="input">
                                                        <div className="id">
                                                            <input
                                                                type="hidden"
                                                                name="id_product"
                                                                value={
                                                                    // !rowSelect || rowSelect.id_product ? rowSelect.id_product = li._id : '' 
                                                                    rowSelect._id =  li._id
                                                                }
                                                                // onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="qty flex justify-between">
                                                            <p className="text-xs">{li.nama}</p>
                                                            <input
                                                                className="shadow-md rounded-md w-full"
                                                                name="qty"
                                                                type="number"
                                                                value={rowSelect && rowSelect.qty ? rowSelect.qty : ''}
                                                                onChange={handleChange}
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
        </div>
    )
}
export default Select