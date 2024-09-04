import React from "react";
import Image from './../../../../assets/react.svg'
// import Swal from 'sweetalert2'
import axios from "axios";
import { postGan } from "../../../../url";

const AddPelanggan = () => {
    const [rowSelect, setRowSelect] = React.useState()

    const addGan = async(e) => {
        e.preventDefault()
        await axios.post(postGan, {
            nama : rowSelect.nama,
            notelp: rowSelect.notelp,
            email : rowSelect.email
        })
        .then(function () {
            console.log('Data Berhasil Terkirim')
            // Swal.fire({
            //     icon: 'success',
            //     title: 'Sukses Menambahkan Pelanggan',
            //     showConfirmButton: false,
            //     timer: 1500
            // })
        })
        .catch((message) => {
            console.log('Data Berhasil Terkirim')
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
            [e.target.name] : e.target.value,
        })
    } 
    return (
        <div className="content">
            <div className="title">
                <p className="text-center my-3">Isi pelanggan dibawah ini</p>
            </div>
            <form action="" onSubmit={addGan}>
                <div className="nama-produk">
                    <p className="text-sm text-gray-600">Nama Pelanggan</p>
                    <input type="text" name="nama" id="namaProduk" placeholder="Masukkan Nama Pelangan" className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                    value={rowSelect && rowSelect.nama ? rowSelect.nama : ''}
                    onChange={handleChange}
                    />
                </div>
                <div className="nama-produk">
                    <p className="text-sm text-gray-600">Nama Pelanggan</p>
                    <input type="text" name="email" id="namaProduk" placeholder="Masukkan Nama Pelangan" className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                    value={rowSelect && rowSelect.email ? rowSelect.email : ''}
                    onChange={handleChange}
                    />
                </div>
                <div className="harga-produk">
                    <p className="text-sm text-gray-600">stok Produk</p>
                    <input type="number" name="notelp" id="hargaProduk" placeholder="Masukkan stok Produk" className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                    value={rowSelect && rowSelect.notelp ? rowSelect.notelp : ''}
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
export default AddPelanggan