import axios from "axios";
import React, { useEffect } from "react";
import { pelanggan } from "../../../../url";

const Pelanggan = () => {
    const [gan, setGan] = React.useState([])

    const getPelanggan = () => {
        axios.get(pelanggan).then((res) => {
            const data = res.data
            setGan(data)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getPelanggan();
    }, [])
    return(
        <div className="conta w-full items-center">
            {
                gan.length === 0
                ?
                <p className="text-center">Pelanggan Belum Tersedia</p>
                :
                gan.map((li, i) => (
                    <div className="card p-2 rounded-md shadow-xl w-40" key={i}>
                            <div className="card-header">
                                <p className="p">{li.nama}</p>
                            </div>
                            <div className="card-body flex justify-between">
                                <p>{li.notelp}</p>                                
                            </div>
                            <div className="card-footer">
                            <p>{li.email}</p>
                            </div>
                        </div>
                ))
            }
        </div>
    )
}
export default Pelanggan