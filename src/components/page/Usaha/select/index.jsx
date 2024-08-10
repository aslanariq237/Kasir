import React from "react";
import Select from "./Select";
import Navbar from "../../../../template/Navbar";
import Carousel from "../../../dasboard/Carousel";
import Cart from "../cart/Cart";

function Index() {
    return (
        <div className="container">
            <div className="px-4 py-4">
                <div className="header">
                    <div className="navbar w-100">
                        <Navbar />
                    </div>
                </div>
                <div className="body">
                    <div className="card my-3">
                        <Carousel />
                    </div>
                    <div className="Select">
                        <Select />
                    </div>
                </div>
            </div>
            <Cart />
        </div>

    )
}
export default Index