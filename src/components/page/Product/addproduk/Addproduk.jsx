import React, { useEffect } from "react";
import Image from './../../../../assets/react.svg'
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { postItems } from "../../../../url"
import "./index.css"

const AddProduk = () => {
    const navigate = useNavigate();    
    const [file, setFile] = React.useState(null);
    const [nama, setNama] = React.useState("");
    const [per, setPer] = React.useState("");
    const [harga, setHarga] = React.useState("");
    const [stok, setStok] = React.useState("")

    const postBarang = async(e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('file', file);
        formData.append('nama', nama);
        formData.append('per', per);
        formData.append('harga', harga);
        formData.append('stok', stok);
        
        try {
            await axios.post(postItems, formData)
            console.log('Data Berhasil Terkirim')
            navigate('/select')
        } catch (error) {
            console.error('error', error.response?.data?.message || error.message)
        }
    }

    return (
        <div className="content">
            <div className="title">
                <p className="text-center my-3">Isi produk dibawah ini</p>
            </div>
            <form onSubmit={postBarang} encType="multipart/form-data">
                
                <div className="nama-produk">
                    <p className="text-sm text-gray-600">Nama Produk</p>
                    <input 
                        type="text" 
                        name="nama" 
                        id="nama" 
                        placeholder="Masukkan Nama Produk" 
                        className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        required
                    />
                </div>                           
                <div className="kategori-produk">
                    <p className="text-sm text-gray-600">Kategori Produk</p>
                    <select name="per" id="per" onChange={(e) => setPer(e.target.value)} className="w-full py-1 px-2 my-2">
                        <option value=""> -- Select The Option -- </option>
                        <option value="pcs">pcs</option>    
                        <option value="box">box</option>    
                        <option value="package">package</option>    
                    </select>
                </div>
                <div className="Gambar-produk">
                    <p className="text-sm text-gray-600">Gambar Produk</p>
                    <input type="file" name="file" className="my-2" onChange={(e) => setFile(e.target.files[0])}/>
                </div>                                 
                <div className="harga-produk">
                    <p className="text-sm text-gray-600">Harga Produk</p>
                    <input type="number" name="harga" id="hargaProduk" placeholder="Masukkan harga Produk" className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    />
                </div>                
                <div className="harga-produk">
                    <p className="text-sm text-gray-600">stok Produk</p>
                    <input type="number" name="stok" id="hargaProduk" placeholder="Masukkan stok Produk" className="py-1 px-2 shadow-md rounded-md w-full my-2" 
                    value={stok}
                    onChange={(e) => setStok(e.target.value)}
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