import React from 'react';
import { useEffect, useState } from 'react';
import "./CoreValues.css";
import coreValueIcon1 from "../../../images/Vector(9).png";
import coreValueIcon2 from "../../../images/Vector(10).png";
import coreValueIcon3 from "../../../images/Vector(11).png";
import { Card } from 'react-bootstrap';
import HomeCoreValues from '../../HomeCoreValues/HomeCoreValues';

const CoreValues = () => {
    const [homeCoreValues, setHomeCoreValues] = useState([])
    const [homeCoreValuesTitle, setHomeCoreValuesTitle] = useState([])
    console.log(homeCoreValuesTitle)



    useEffect(() => {
        fetch('https://danapori.techsistltd.com/home_details/')
            .then(res => res.json())
            .then(data => {
                setHomeCoreValuesTitle(data.data.core_value)
                setHomeCoreValues(data.data.core_value.core_value_details)

            })
    }, [])
    return (


        <div className="container overflow-hidden mt-5">
            <div className=''> <h2 className=' text-center coreValues-title '>{homeCoreValuesTitle.title}</h2></div>
            <div className="row gx-5 gy-3">
                {
                    homeCoreValues.map(values => <HomeCoreValues

                        values={values}
                    ></HomeCoreValues>)
                }

            </div>
        </div>

    );
};

export default CoreValues;