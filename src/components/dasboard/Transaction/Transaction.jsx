import React from "react";
import { Link } from "react-router-dom";

const Transaction = () => {
    return (
        <React.Fragment>
            <div className="contet">
                <div className="r1 flex justify-between">
                    <p>Transaksi Hari ini</p>
                    <Link to={'/laporan'}>
                        <p className="text-sm text-blue-400">Lihat Laporan</p>
                    </Link>
                </div>
                <div className="r2 flex justify-between my-3 items-center">
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
                </div>
            </div>
        </React.Fragment>
    )
}

export default Transaction