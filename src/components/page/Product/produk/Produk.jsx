import React, { useEffect, useState } from "react";
import axios from "axios";
import { product } from "../../../../url";

const Produk = () => {

    const [item, setItem] = useState([])

    const getItem = async () => {
        await axios.get(product)
            .then((res) => {
                let data = res.data
                setItem(data)
            }).catch(err => console.log(err.message))
    }

    const createItem = () => {

    }
    useEffect(() => {
        getItem()
    }, [])
    return (
        <React.Fragment>
            <div className="conta w-full items-center">
                <div className="mt-6">
                {item.length === 0
                    ?
                    <div className="container">
                        <p className="text-center">Barang Belum Tersedia</p>
                    </div>
                    :
                    item.map((li, i) => (
                        <div className="card p-2 rounded-md shadow-xl" key={i}>
                            <div className="card-header flex justify-between">
                                <p>{li.nama}</p>
                                <p>{li.warna}</p>
                            </div>
                            <div className="card-footer flex justify-between">
                                <p>$.{li.harga}</p>
                                <p>{li.stok}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
                
            </div>
        </React.Fragment>
    )
}
export default Produk