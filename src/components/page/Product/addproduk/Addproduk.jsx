import React, { useEffect } from "react";
import Image from './../../../../assets/react.svg'
// import Swal from 'sweetalert2'
import axios from "axios"
import { postItems } from "../../../../url"
import "./index.css"

const AddProduk = () => {
    let formData = new FormData();
    const [rowSelect, setRowSelect] = React.useState();

    const postBarang = async(e) => {
        e.preventDefault()
        await axios.post(postItems, {
            nama: rowSelect.nama,
            warna: rowSelect.warna,
            saiz: rowSelect.saiz,
            harga: rowSelect.harga,
            stok: rowSelect.stok
        })
        .then(function () {
            console.log("Data Berhasil Terkirim")
            // Swal.fire({
            //     icon: 'success',
            //     title: 'Sukses Menambahkan Produk',
            //     showConfirmButton: false,
            //     timer: 1500
            // })
        })
        .catch((message) => {
            console.log("Data Berhasil Terkirim")
            // Swal.fire({
            //     icon: 'error',
            //     title: message.response.data.message,
            //     showConfirmButton: false,
            //     timer: 1600
            // })
        })
    }

    const handleChange = (e) => {
        setRowSelect({
            ...rowSelect,
            [e.target.name]:e.target.value,
        })
    }

    return (
        <div className="content">
            <div className="title">
                <p className="text-center my-3">Isi produk dibawah ini</p>
            </div>
            <form onSubmit={postBarang}>
                
                <div className="nama-produk">
                    <p className="text-sm text-gray-600">Nama Produk</p>
                    <input type="text" name="nama" id="nama" placeholder="Masukkan Nama Produk" className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                    value={rowSelect && rowSelect.nama ? rowSelect.nama : ''}
                    onChange={handleChange}
                    />
                </div>
                <div className="nama-produk">
                    <p className="text-sm text-gray-600">Warna Produk</p>
                    <input type="text" name="warna" id="namaProduk" placeholder="Masukkan warna Produk" className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                    value={rowSelect && rowSelect.warna ? rowSelect.warna: ''}
                    onChange={handleChange}
                    />
                </div>
                <div className="nama-produk">
                    <p className="text-sm text-gray-600">Saiz Produk</p>
                    <input type="text" name="saiz" id="namaProduk" placeholder="Masukkan saiz Produk" className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                    value={rowSelect && rowSelect.saiz ? rowSelect.saiz : ''}
                    onChange={handleChange}
                    />
                </div>
                <div className="harga-produk">
                    <p className="text-sm text-gray-600">Harga Produk</p>
                    <input type="number" name="harga" id="hargaProduk" placeholder="Masukkan harga Produk" className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                    value={rowSelect && rowSelect.harga ? rowSelect.harga : ''}
                    onChange={handleChange}
                    />
                </div>
                <div className="harga-produk">
                    <p className="text-sm text-gray-600">stok Produk</p>
                    <input type="number" name="stok" id="hargaProduk" placeholder="Masukkan stok Produk" className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                    value={rowSelect && rowSelect.stok ? rowSelect.stok : ''}
                    onChange={handleChange}
                    />                    
                </div>
                <div className="sub">
                    <button type="submit" className="w-full bg-green-500 rounded-md py-1 my-2">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddProduk