import React from 'react';

const HomeDanapuriOffers = ({ offers }) => {
    const { icon_url, title } = offers
    return (
        <div class="col col-md-3 col-12  ">
            <div className=' border bg-light dhanapuri-card'>
                <div className='d-flex align-items-center justify-content-center'>
                    <img className='img-offers' src={icon_url} alt="" />


                </div>
                < hr className='w-25 mx-auto' id="offers-horizontal" />


                <p id="offers-text" className=' DhanaPuriOffers-description text-center '> 	{title}</p>
            </div>
        </div>
    );
};

export default HomeDanapuriOffers;