import React from 'react';
import "./HomeCoreValues.css";

const HomeCoreValues = ({ values }) => {
    const { icon_url, title, description } = values

    return (
        <div className="col col-md-4 col-12">


            <div className=' border  CoreValuesCard-height CoreValuesCard-padding '>
                <img className="coreValues-image" src={icon_url} alt="" />
                <h2 className='coreValuesCard-title '>{title}</h2>
                <p className='coreValuesCard-description'>{description}</p>
            </div>

        </div>
    );
};

export default HomeCoreValues;