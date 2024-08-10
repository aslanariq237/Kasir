import React from "react";
import AddPelanggan from "./addpelanggan";
import { Link } from "react-router-dom";

function Index() {
    return (
        <div className="container">
            <div className="px-6 py-4">
                <div className="nav w-100 flex justify-between items-center">
                    <Link to={'/'}>
                        <p className="text-xs">Kembali</p>
                    </Link>
                    <p className="text-xs text-gray-500">Dashboard / add-pelanggan</p>
                </div>
                <div className="body">
                    <AddPelanggan/>
                </div>
            </div>
        </div>
    )
}
export default Index