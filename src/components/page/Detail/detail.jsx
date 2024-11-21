import React, { useEffect } from "react";
import { pay } from "../../../url";
import { Link } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const [detail, setDetail] = React.useState([]);

    const getItems = async () => {
        await axios.get(pay)
        .then((res) => {
            let data = res.data
            setDetail(data);
        }).catch(err => console.log(err.message));
    }

    useEffect(() => {
        getItems()
    }, [])
    return(
        <div className="conntainer">          
            <div className="Detail border-t-2 mt-3 border-gray-500">
                {detail.map((li, i) => (
                    <div className="masukan border-b-2 border-gray-700" key={i}>
                        <div className="flex justify-between my-4">
                            <div className="left">
                                <p className="font-semibold">{li.nama}</p> 
                                <p className="">Rp. {li.total}</p>  
                            </div>
                            <div className="right">
                                <p>{li.metode_payment}</p>
                                <p>{li.status_payment}</p>                                
                            </div>
                        </div>                     
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Detail