import React from "react";
import Index from "./Carousel";
import Navbar from "../../template/Navbar";
import Card from "./Card/index";
import Transaction from "./Transaction/index";
import Footer from "../../template/footer";

function Main() {
    return (
        <div className="px-4 py-4">
            <div className="header">
                <div className="navbar w-100">
                    <Navbar />
                </div>
            </div>            
            <div className="body">
                <div className="card my-3">
                    <Index />
                </div>
                <div className="card my-3">
                    <Card />
                </div>
                <div className="transaction">
                    <Transaction />
                </div>
            </div>
        </div>
    )
}
export default Main