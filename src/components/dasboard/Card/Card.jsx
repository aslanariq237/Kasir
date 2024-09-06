import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className="Main py-3">
            <div className="menu flex justify-between items-center bg-blue-300 p-2 rounded-md">
                <div className="func flex items-center space-x-3">
                    <div className="circle w-12 h-12 rounded-full bg-gray-400"></div>
                    <div className="text">
                        <p className="text-semibold">Menu Online</p>
                        <p className="text-gray-600 text-sm">Atur, Unduh dan Bagikan Menu mu</p>
                    </div>
                </div>
            </div>
            <div className="cards flex justify-between space-x-3 mt-4">
                <div className="card bg-slate-300 p-2 rounded-md w-full">
                    <Link to={'/produk'}>
                        <div className="btn1 flex justify-between">
                            <p className="font-semibold">Produk</p>
                            <p className="rounded-md font-bold">&#10132;</p>
                        </div>
                    </Link>
                    <Link to={'/add-produk'}>
                        <button className="text-sm bg-white p-2 rounded-md w-full mt-3">+ Produk baru</button>
                    </Link>
                </div>
                <div className="card bg-slate-300 p-2 rounded-md w-full">
                    <Link to={'/pelanggan'}>
                        <div className="btn2 flex justify-between">
                            <p className="font-semibold">Pelanggan</p>
                            <p className="rounded-md font-bold">&#10132;</p>
                        </div>
                    </Link>
                    <Link to={'/add-pelanggan'}>
                        <button className="text-sm bg-white p-2 rounded-md w-full mt-3">+ Pelanggan baru</button>
                    </Link>
                </div>
            </div>
        </div>        
    )
}
export default Card