import React, { useEffect, useState } from 'react';
import "./DhanaPuriOffers.css";
import offer1 from "../../images/offer1.png";
import offer2 from "../../images/offer2.png";
import offer3 from "../../images/offer3.png";
import offer4 from "../../images/offer4.png";
import HomeDanapuriOffers from '../HomeDanapuriOffers/HomeDanapuriOffers';

const DhanaPuriOffers = () => {
    const [danapuriOffers, setdanapuriOffers] = useState([])
    const [danapuriOfferDetails, setDanapuriOfferDetails] = useState([])

    // console.log(danapuriOffers)

    useEffect(() => {
        fetch('https://danapori.techsistltd.com/home_details/')
            .then(res => res.json())
            .then(data => setdanapuriOffers(data.data.danapuri_offer))
    }, [])
    useEffect(() => {
        fetch('https://danapori.techsistltd.com/home_details/')
            .then(res => res.json())
            .then(data => setDanapuriOfferDetails(data.data.danapuri_offer.danapuri_offer_details))
    }, [])
    return (
        <div className='container-fluid dhanaPuriOffers-bg  pt-5'>
            <div class="container overflow-hidden ">
                <h2 className='dhanapuriOffers-title text-center '>{danapuriOffers.title}</h2>
                <div class="row gx-5 gy-3 danapuri0ffers-margin">
                    {
                        danapuriOfferDetails.map(offers => <HomeDanapuriOffers
                            offers={offers}


                        ></HomeDanapuriOffers>)
                    }

                </div>

            </div>
        </div>


    );
};

export default DhanaPuriOffers;