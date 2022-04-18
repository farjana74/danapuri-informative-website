import React from 'react';
import './BusinessContact.css';

const BusinessContact = () => {
    return (
        <div className='container-fluid py-5 bussiness-contact-container '>
            <div className='py-3'>
                <h1 className='business-contact-title'>Are you ready to grow your <br /> business with us?</h1>
                <p className='business-contact-desc-txt'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </p>
                <button className='contact-us-btn'>Contact US</button>
            </div>
        </div>
    );
};

export default BusinessContact;