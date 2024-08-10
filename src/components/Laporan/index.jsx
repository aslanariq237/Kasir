import React from "react";
import Navbar from "../../template/Navbar";
import { Link } from "react-router-dom";
import Index from "./Card";
import Index1 from "./Pendapatan/"

function Laporan() {
    return (
        <div className="container">
            <div className="px-6 py-4">
                <div className="nav w-100 flex justify-between">
                    <Link to={'/'}>
                        <p className="text-xs">Kembali</p>
                    </Link>
                    <p className="text-xs text-gray-500">Dashboard / Laporan</p>
                </div>
                <div className="body">
                    <Index />
                </div>
            </div>
            <div className="border-b-2 border-gray-300"></div>
            <div className="px-6 py-4">
                <div className="main">
                    <Index1/>
                </div>
            </div>
        </div>
    )
}
export default Laporan