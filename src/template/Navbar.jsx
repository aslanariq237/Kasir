import React from "react";
import Factory from "./../assets/factory.jpg"

const Navbar = () => {
    return(
        <div className="nav flex">
            <div className="sideLeft flex items-center space-x-3">
                <div className="logo w-8 h-8 rounded-full">
                    <img src={Factory} alt="" />
                </div>
                <div className="nama-perusahaan text-sm">
                    <p>Bright</p>
                    <p className="text-slate-600 ">Lihat Profile</p>
                </div>
            </div>

        </div>
    )
}
export default Navbar