import React, { useContext } from "react";
import { CartContext } from "../cart/CartContext";


import CupHolder from './../../../../assets/cup-holder.jpeg'
import Klakson from './../../../../assets/klakson.jpeg'
import PhoneHolder from './../../../../assets/phone-holder.jpeg'
import KacaFile from './../../../../assets/kaca-film.jpeg'

const Produk = [
    {
        id_produk: 1,
        nama_produk: "cup-holder",
        harga_produk: 50000,
        foto_produk: CupHolder
    },
    {
        id_produk: 2,
        nama_produk: "phone-holder",
        harga_produk: 100000,
        foto_produk: PhoneHolder
    },
    {
        id_produk: 3,
        nama_produk: "kaca-film",
        harga_produk: 250000,
        foto_produk: KacaFile
    },
    {
        id_produk: 4,
        nama_produk: "klakson",
        harga_produk: 70000,
        foto_produk: Klakson
    },
    {
        id_produk: 4,
        nama_produk: "klakson",
        harga_produk: 70000,
        foto_produk: Klakson
    },
    {
        id_produk: 4,
        nama_produk: "klakson",
        harga_produk: 70000,
        foto_produk: Klakson
    },
    {
        id_produk: 4,
        nama_produk: "klakson",
        harga_produk: 70000,
        foto_produk: Klakson
    },
    {
        id_produk: 4,
        nama_produk: "klakson",
        harga_produk: 70000,
        foto_produk: Klakson
    },
    {
        id_produk: 4,
        nama_produk: "klakson",
        harga_produk: 70000,
        foto_produk: Klakson
    },
    {
        id_produk: 4,
        nama_produk: "klakson",
        harga_produk: 70000,
        foto_produk: Klakson
    },
    {
        id_produk: 4,
        nama_produk: "klakson",
        harga_produk: 70000,
        foto_produk: Klakson
    }
]

const Select = () => {
    // const {addToCart} = useContext(CartContext);
    
    return (
        <div className="cont mb-10">
            <p className="text-center">Pilih Produk di Bawah ini</p>
            <div className="produks flex flex-wrap justify-start">
                {Produk.map((i, id) => (
                    <div className="produk mt-3 rounded-sm p-2 mr-2 shadow-md border-2 border-gray-300 item-center" key={id}>
                        <div className="header">
                            <img src={i.foto_produk} width={80} alt="" className="h-12 rounded-md" />
                        </div>
                        <div className="body text-xs mt-2">
                            <p>{i.nama_produk}</p>
                            <p>{i.harga_produk}</p>
                        </div>
                        <button className="bg-blue-300 p-1 text-sm rounded-lg">Add To Cart</button>
                        {/* <button onClick={() => addToCart(i)}>Add To Cart</button> */}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Select