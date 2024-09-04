import React from "react";
import Index from "./Carousel";
import Navbar from "../../template/Navbar";
import Card from "./Card/index";
import Transaction from "./Transaction/index";
import Footer from "../../template/footer";

function Main() {
    return (
        <div className="dashboard mx-2">
            <div className="nav">
                <Navbar/>
            </div>
            <div className="body lg:flex">
                <div className="Cat lg:w-24">
                    <Index/>
                </div>
                <div className="main w-full lg:ml-2">
                    <div className="card w">
                        <Card/>
                    </div>                    
                    <div className="transaction">
                        <Transaction/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main