import React from 'react';
import './CorporateValueCard.css';
import corporateIcon from "../../../images/corporate-value-card.svg";

const CorporateValueCard = () => {
    return (
        <div className="col">
            <div className="corporate-card h-100  text-start border-0">
                <img src={corporateIcon} className="img-fluid text-start ms-3 mt-3 corporate-value-icon" alt="..." width="40" height="40" />
                <div className="card-body">
                    <h4 className="corporate-value-card-title">Inventory management
                    </h4>
                    <p className="corporate-value-desc-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
            </div>
        </div>
    );
};

export default CorporateValueCard;