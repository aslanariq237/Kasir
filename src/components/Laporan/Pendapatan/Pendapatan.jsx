import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { pay } from "../../../url";

const Pendapatan = () => {
    const [data, setData] = React.useState([]);

    const getData = async () => {
        await axios.get(pay)
            .then((res) => {
                let data = res.data
                setData(data);
            }).catch(err => console.log(err.message));
    }

    const total = data.reduce((total, item) => total + item.total, 0);

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="box">
            <div className="content">
                <div className="r1 flex justify-between items-center">
                    <p className="font-semibold">Pendapatan</p>
                    <Link to="/detail">
                        <p className="text-xs text-blue-400">Lihat Laporan</p>
                    </Link>
                </div>
                <div className="r2 flex justify-between items-center my-2">
                    <p className="font-semibold text-2xl">Rp. {total}</p>
                    <div className="persen">
                        <p className="text-sm text-green-500 text-center">0%</p>
                        <p className="text-xs text-gray-500">dari hari ini lalu</p>
                    </div>
                </div>
                <div className="border-b-2 border-gray-300 my-3"></div>
                <div className="r3 flex justify-between items-baseline">
                    <div className="p">
                        <p className="font-semibold text-2xl text-center">{data.length}</p>
                        <p className="text-xs text-gray-500">Transaksi Berhasil</p>
                    </div>
                    <div className="persen">
                        <p className="text-sm text-green-500 text-center">0%</p>
                        <p className="text-gray-500 text-xs">dari hari ini lalu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pendapatan