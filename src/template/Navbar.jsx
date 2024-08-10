import React from "react";

const Navbar = () => {
    return(
        <div className="nav flex">
            <div className="sideLeft flex items-center space-x-3">
                <div className="logo w-8 h-8 rounded-full bg-slate-400"></div>
                <div className="nama-perusahaan text-sm">
                    <p>Bright</p>
                    <p className="text-slate-600 ">Lihat Profile</p>
                </div>
            </div>

        </div>
    )
}
export default Navbar