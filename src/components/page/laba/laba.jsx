import React, {useEffect, useState} from "react";

const Laba = () => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [appeand, setAppeand] = useState('')

    useEffect(() => {
        setAppeand(first + last)
    })
    
    return(
        <div className="cn">
            <input type="text" onChange={() => setFirst()} placeholder="Ketik Disini" className="w-full shadow-md px-2 py-1 rounded-lg"/>
            <input type="text" onChange={() => setLast()} placeholder="Ketik Disini" className="w-full shadow-md px-2 py-1 rounded-lg"/>
            <div className="output">
                <p>Output Di bawah ini: </p>
                <label>
                    {appeand}
                </label>
            </div>
        </div>
    )
}
export default Laba