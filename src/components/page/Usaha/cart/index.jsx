import React from "react";
import Cart from "./Cart";
import Navbar from "../../../../template/Navbar";
import Carousel from "../../../dasboard/Carousel/Carousel";
import { Link } from "react-router-dom";

function Index() {
    return(
        <div className="Carousel">
            <div className="nav">
                <Navbar />
            </div>
            <div className="main lg:flex">
                <div className="side lg:w-32">
                    <Carousel />
                </div>
                <div className="detail w-full px-5">
                <div className="main w-full">
                        <div className="card px-4 py-4">
                            <div className="nav flex justify-between items-center">
                                <Link to={'/'}>
                                    <p>Kembali</p>
                                </Link>
                                <p className="text-gray-500">Dashboard / Produk</p>
                            </div>
                            <div className="body">
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index