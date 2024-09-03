import React from "react";
import { Link } from "react-router-dom";
import Kelola from "./../../../assets/kelola.png"
import Home from "./../../../assets/home.jpg"

const Carousel = () => {
    return (
        <div className="content flex justify-around items-center border-t-2 pt-3">
            <Link to={'/'}>
                <div className="card">
                    <div className="card-header w-9 h-9 rounded-full">
                        <img src={Kelola} alt="" className="flex justify-centerust" />
                    </div>
                    <div className="card-footer flex justify-center">
                        <p>Kelola</p>
                    </div>
                </div>
            </Link>
            <Link to={'/select'}>
                <div className="card">
                    <div className="card-header w-9 h-9 rounded-ful">
                        <img src={Home} alt="" />
                    </div>
                    <div className="card-footer flex justify-center">
                        <p>Usaha</p>
                    </div>
                </div>
            </Link>
            <Link to={'/laba'}>
                <div className="card">
                    <div className="card-header w-9 h-9 rounded-full bg-gray-400"></div>
                    <div className="card-footer flex justify-center">
                        <p>Laba</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Carousel

// const mystle = {
//     cardHeader: {
//         backgroundColor: "slate",
//         padding: 20
//     }
// }