import React from "react";

const Pendapatan = () => {
    return (
        <div className="content">
            <div className="r1 flex justify-between items-center">
                <p className="font-semibold">Pendapatan</p>
                <p className="text-xs text-blue-600">Lihat Laporan</p>
            </div>
            <div className="r2 flex justify-between items-center my-2">
                <p className="font-semibold text-2xl">Rp. 0</p>
                <div className="persen">
                    <p className="text-sm text-green-500 text-center">0%</p>
                    <p className="text-xs text-gray-500">dari hari ini lalu</p>
                </div>
            </div>
            <div className="border-b-2 border-gray-300 my-3"></div>

            <div className="r3 flex justify-between items-baseline">
                <div className="p">
                    <p className="font-semibold text-2xl">0</p>
                    <p className="text-xs text-gray-500">Transaksi Berhasil</p>
                </div>
                <div className="persen">
                    <p className="text-sm text-green-500 text-center">0%</p>
                    <p className="text-gray-500 text-xs">dari hari ini lalu</p>
                </div>
            </div>
        </div>
    )
}

export default Pendapatan