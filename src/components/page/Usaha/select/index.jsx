import React from "react";
import Select from "./Select";
import Navbar from "../../../../template/Navbar";
import Carousel from "../../../dasboard/Carousel";

function Index() {
    return (
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
                        <div className="card w">
                            <Select />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index