import React from "react";
import Detail from "./detail";
import Navbar from "../../../template/Navbar";
import { Link } from "react-router-dom";
import Carousel from "../../dasboard/Carousel/Carousel";

const Index = () => {
    return (
        <div className="Carousel">
            <div className="nav">
                <Navbar />
            </div>
            <div className="main lg:flex">
                <div className="side lg:w-32">
                    <Carousel />
                </div>
                <div className="detail w-full">
                    <div className="main w-full">
                        <div className="px-6 py-4">
                            <div className="nav w-100 flex justify-between">
                                <Link to={'/laporan'}>
                                    <p className="text-xs">Kembali</p>
                                </Link>
                                <p className="text-xs text-gray-500">Dashboard / Laporan</p>
                            </div>
                            <div className="body">
                                <Detail />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Index