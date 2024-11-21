import React from "react";
import moment from "moment";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Card = () => {
    const Dates = new Date().toDateString();
    const format = moment(Dates).format('DD MMMM YYYY');
    return (
        <div className="content my-2">
            <div className="date flex justify-center my-2">
                <p>{format}</p>
            </div>
            <div className="button flex justify-center">
                <button className="w-full border-gray-500 border-2 rounded-md">Hari Ini</button>
                <Popup
                    trigger={ open => (
                        <button className="w-full rounded-md">7 Hari</button>
                    )}
                        position="bottom center"
                        closeOnDocumentClick
                    >
                        <span>Button Couldn't Press</span>
                    </Popup>                              
                    <Popup
                    trigger={ open => (
                        <button className="w-full rounded-md">14 Hari</button>
                    )}
                        position="bottom center"
                        closeOnDocumentClick
                    >
                        <span>Button Couldn't Press</span>
                    </Popup>                            
            </div>
        </div>
    )
}
export default Card