import React from 'react';
import "./AccountListCounter.css";
import { useEffect, useState } from 'react';
import HomeAccountCounter from '../HomeAccountCounter/HomeAccountCounter';

const AccountListCounter = () => {
    const [counter, setCounter] = useState([])
    const [accountCounter, setAccountCounter] = useState([])
    console.log(counter)

    useEffect(() => {
        fetch('https://danapori.techsistltd.com/home_details/')
            .then(res => res.json())
            .then(data => setCounter(data.data.accomplishment))
    }, [])

    useEffect(() => {
        fetch('https://danapori.techsistltd.com/home_details/')
            .then(res => res.json())
            .then(data => setAccountCounter(data.data.accomplishment.accomplishment_description))
    }, [])
    return (

        <div className='container-fluid  counter-background   '>
            <div className='container'>
                <h2 className='text-center counter-header'>{counter.title}</h2>
                <p className='text-center  counter-description'>{counter.description}</p>

                <div className=' row  counter-height d-flex align-items-center '>
                    {
                        accountCounter.map(accountCounters => <HomeAccountCounter

                            accountCounters={accountCounters}



                        ></HomeAccountCounter>)
                    }

                </div>

            </div>

        </div>

    );
};

export default AccountListCounter;