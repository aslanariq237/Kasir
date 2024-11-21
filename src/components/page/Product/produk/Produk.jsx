import React, { useEffect, useState } from "react";
import axios from "axios";
import { product, url_image } from "../../../../url";

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
                            <div className="flex justify-start space-x-4">
                                <img src={url_image + li.file} alt="" className="rounded-md" width={80}/>
                                <div className="title w-full">
                                    <p className="font-semibold">{li.nama}</p>
                                    <div className="r1 flex justify-between items-baseline">
                                        <p className="text-gray-600">{li.stok}</p>
                                        <p className="text-gray-700">Rp. {li.harga}</p>
                                    </div>
                                </div>
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