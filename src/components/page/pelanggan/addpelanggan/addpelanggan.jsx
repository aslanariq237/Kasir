import { React, useState } from "react";
import Image from './../../../../assets/react.svg'

const AddPelanggan = () => {
    const [namaPelanggan, setNamaPelanggan] = useState([]);
    const [NomorPelanggan, setNomorPelanggan] = useState([]);

    return (
        <div className="content">
            <div className="title">
                <p className="text-center my-3">Isi pelanggan dibawah ini</p>
            </div>
            <form action="">
                <div className="nama-produk">
                    <p className="text-sm text-gray-600">Nama Pelanggan</p>
                    <input type="text" name="namaProduk" id="namaProduk" placeholder="Masukkan Nama Pelangan" className="py-1 px-2 shadow-md rounded-md w-full my-2" />
                </div>
                <div className="harga-produk">
                    <p className="text-sm text-gray-600">Nomor Pelanggan</p>
                    <input type="number" name="hargaProduk" id="hargaProduk" placeholder="Masukkan Nomor Pelanggan" className="py-1 px-2 shadow-md rounded-md w-full my-2" />
                </div>
                <div className="sub">
                    <button type="submit" className="w-full bg-green-500 rounded-md py-1 my-2">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddPelanggan