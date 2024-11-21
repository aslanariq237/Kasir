import React from "react";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Kelola from "./../../../assets/kelola.png"
import Home from "./../../../assets/home.jpg"
import Laba from "./../../../assets/laba.png"

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
                <Popup
                    trigger={open => (
                        <div className="card flex flex-col items-center">
                            <div className="card-header">
                                <img src={Laba} className="w-12 h-12" alt="" />
                            </div>
                            <p>Laba</p>
                        </div>
                    )}
                    position="bottom center"
                    closeOnDocumentClick
                >
                    <span>On Progress</span>
                </Popup>
            </div>
        </div>

    )
}

export default Carousel