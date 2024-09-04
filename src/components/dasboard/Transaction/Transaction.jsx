import React from "react";
import { Link } from "react-router-dom";

const Transaction = () => {
    return (
        <React.Fragment>
            <div className="contet">
                <div className="r1 flex justify-between items-center py-2">
                    <p className="lg:text-lg">Transaksi Hari ini</p>
                    <Link to={'/laporan'}>
                        <p className="text-md text-blue-400">Lihat Laporan</p>
                    </Link>
                </div>
                <div className="stat border-t-2 py-2">
                    <div className="progs flex justify-around">
                        <div className="prog1 flex flex-col items-center">
                            <p>keuntungan</p>
                            <div className="card-header w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-gray-400 flex justify-center items-center">
                                <div className="card-header w-10 lg:w-14 h-10 lg:h-14 rounded-full bg-white flex justify-center items-center">
                                    <p>100%</p>
                                </div>
                            </div>
                            <p className="text-gray-500">Kemarin</p>
                        </div>
                        <div className="prog2 flex flex-col items-center">
                            <p>Terjual</p>
                            <div className="card-header w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-gray-400 flex justify-center items-center">
                                <div className="card-header w-10 lg:w-14 h-10 lg:h-14 rounded-full bg-white flex justify-center items-center">
                                    <p>100%</p>
                                </div>
                            </div>
                            <p className="text-gray-500">Kemarin</p>
                        </div>
                    </div>
                    <div className="chart">
                        <p>Berhasiol</p>
                    </div>
                </div>
                {/* <div className="r2 flex justify-between my-3 items-center">
                    <div className="hrga1">
                        <p>Rp. 0</p>
                        <p className="text-xs">Keuntungan</p>
                    </div>
                    <div className="persen1">
                        <p className="text-center">100%</p>
                        <p className="text-xs text-gray-500">Dari Kemarin</p>
                    </div>
                </div>
                <div className="r2 flex justify-between my-3 items-center">
                    <div className="hrga1">
                        <p>Rp. 0</p>
                        <p className="text-xs">Unit Terjual</p>
                    </div>
                    <div className="persen1">
                        <p className="text-center">100%</p>
                        <p className="text-xs text-gray-500">Dari Kemarin</p>
                    </div>
                </div> */}
            </div>
        </React.Fragment>
    )
}

export default Transaction