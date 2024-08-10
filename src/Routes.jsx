import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Main from "./components/dasboard";
import Laporan from "./components/Laporan";
import {
    Produk, AddProduk,
    AddPelanggan, Pelanggan,
    Select, Laba
} from "./components/page";


const Rute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/laporan" element={<Laporan/>}/>
                <Route path="/produk" element={<Produk/>}/>
                <Route path="/add-produk" element={<AddProduk/>}/>
                <Route path="/add-pelanggan" element={<AddPelanggan/>}/>
                <Route path="/pelanggan" element={<Pelanggan/>}/>
                <Route path="/select" element={<Select/>}/>
                <Route path="/laba" element={<Laba/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rute