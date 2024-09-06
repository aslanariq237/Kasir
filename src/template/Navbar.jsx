import React from "react";
import Factory from "./../assets/factory.jpg"
import { Link } from "react-router-dom";
import Control from "./../assets/control.png"

const Navbar = () => {
    return (
        <div className="Navbar flex justify-between items-center px-3 py-3 border-b-2 rounded-md">
            <div className="Company flex items-center space-x-2">
                <div className="image border-2 border-blue-400 rounded-full">
                    <img
                        src={Factory}
                        alt="logo-umkm"
                        className="w-9 lg:w-12 rounded-full"
                    />
                </div>
                <div className="text">
                    <p className="font-semibold text-sm lg:text-lg">Bright</p>
                    <p className="text-gray-500 text-sm">Company</p>
                </div>
            </div>
            <div className="func">
                <Link to={'/cart'}>
                    <img 
                        src={Control} 
                        alt=""
                        className="w-6"
                    />
                </Link>
            </div>
        </div>
    )
}
export default Navbar