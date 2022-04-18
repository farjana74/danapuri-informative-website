import React from 'react';
import "./DigitalEconomy.css";
import { useEffect, useState } from 'react';

const DigitalEconomy = () => {
    const [digitalEconomy, setDigitalEconomy] = useState([])
    // console.log(bannerPage)
    useEffect(() => {
        fetch('https://danapori.techsistltd.com/home_details/')
            .then(res => res.json())
            .then(data => setDigitalEconomy(data.data.digital_economy))
    }, [])
    return (
        <div className='container-fluid digital-background'>

            <div className='digital-content container '>
                <div className='row  d-flex align-items-center justify-content-center  '>
                    <div className='col-md-8 col-sm-12 col-lg-8 '>
                        <h2 className='digital-header my-2 '>{digitalEconomy.title}</h2>
                    </div>
                    <div className='col-md-4 col-sm-12 col-lg-4 '>
                        <button className="digital-button border bg-black p-2 text-white">{digitalEconomy.button_text}</button>
                        {/* <h3 className="digital-button border p-1 text-center text-white">
                            {digitalEconomy.button_text}
                        </h3> */}
                    </div>
                </div>


            </div>
        </div>

    );
};

export default DigitalEconomy;