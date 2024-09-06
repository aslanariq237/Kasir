import React from "react";
import Index from "./Carousel";
import Navbar from "../../template/Navbar";
import Card from "./Card/index";
import Transaction from "./Transaction/index";
import Footer from "../../template/footer";
import Chart from "./chart";

function Main() {
    return (
        <div className="Carousel">
            <div className="nav">
                <Navbar />
            </div>
            <div className="main lg:flex">
                <div className="side lg:w-32">
                    <Index />
                </div>
                <div className="detail w-full px-5">
                    <div className="func1 lg:flex lg:space-x-4">
                        <div className="card lg:w-4/5">
                            <Card />
                        </div>
                        <div className="transaction lg:w-2/5 lg:border-l-2 lg:pl-2">
                            <Transaction/>
                        </div>
                    </div>
                    <div className="func2">
                        <Chart/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main