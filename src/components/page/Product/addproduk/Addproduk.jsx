import { React, useState } from "react";
import Image from './../../../../assets/react.svg'
import "./index.css"

const AddProduk = () => {
    const [namaProduk, setNamaProduk] = useState([]);
    const [hargaProduk, setHargaProduk] = useState([]);
    const [fotoBarang, setFotoBarang] = useState([]);

    return (
        <div className="content">
            <div className="title">
                <p className="text-center my-3">Isi produk dibawah ini</p>
            </div>
            <form action="">
                <div className="foto-produk">
                    <p className="text-sm text-gray-600">Foto Produk</p>
                    <input
                        type="file"
                        name=""
                        id="fileElem"
                        multiple
                        accept="image/*"
                        className="visually-hidden" />
                    <label htmlFor="fileElem">
                        <img src={Image} alt="" className="my-2" />
                    </label>
                </div>
                <div className="nama-produk">
                    <p className="text-sm text-gray-600">Nama Produk</p>
                    <input type="text" name="namaProduk" id="namaProduk" placeholder="Masukkan Nama Produk" className="py-1 px-2 shadow-md rounded-md w-full my-2" />
                </div>
                <div className="harga-produk">
                    <p className="text-sm text-gray-600">Harga Produk</p>
                    <input type="number" name="hargaProduk" id="hargaProduk" placeholder="Masukkan harga Produk" className="py-1 px-2 shadow-md rounded-md w-full my-2" />
                </div>
                <div className="sub">
                    <button type="submit" className="w-full bg-green-500 rounded-md py-1 my-2">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddProduk