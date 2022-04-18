import React from 'react';
import CorporateValueCard from '../CorporateValueCard/CorporateValueCard';
import './CorporateValues.css';

const CorporateValues = ({ about }) => {
    return (
        <div className='container-fluid py-5'>
            <div className="container mx-auto py-5">
                <h2 className='corporate-value-title'></h2>
                <p className='corporate-value-sub-title'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-4 px-4 corporate-card-holder">
                    <CorporateValueCard></CorporateValueCard>
                    <CorporateValueCard></CorporateValueCard>
                    <CorporateValueCard></CorporateValueCard>
                    <CorporateValueCard></CorporateValueCard>
                    <CorporateValueCard></CorporateValueCard>
                    <CorporateValueCard></CorporateValueCard>

                </div>
            </div>

        </div>
    );
};

export default CorporateValues;