import React from "react";
import { Link } from "react-router-dom";
import Kelola from "./../../../assets/kelola.png"
import Home from "./../../../assets/home.jpg"

const Carousel = () => {
    return (
        <div className="pt-2 px-3 lg:border-r-2">
            <div className="category flex justify-around lg:flex lg:flex-col lg:justify-between lg:h-[50vh]">
                <Link to={'/'}>
                    <div className="card flex flex-col items-center">
                        <div className="card-header ">
                            <img src={Kelola} alt="" className="w-12 h-12" />
                        </div>
                        <p>Kelola</p>
                    </div>
                </Link>
                <Link to={'/select'}>
                    <div className="card flex flex-col items-center">
                        <div className="card-header">
                            <img src={Home} alt="" className="w-12 h-12" />
                        </div>
                        <p>Usaha</p>
                    </div>
                </Link>
                <Link to={'/laba'}>
                    <div className="card flex flex-col items-center">
                        <div className="card-header">
                            <div className="card-header w-12 h-12 rounded-full bg-gray-400"></div>
                        </div>
                        <p>Laba</p>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Carousel