import React from 'react';

const HomeAccountCounter = ({ accountCounters }) => {
    const { number, title } = accountCounters
    return (
        <div className=' col'>
            <h1 className='project-counter text-center'>{number}</h1>
            <p className='counter-description text-center'>{title}</p>

        </div>
    );
};

export default HomeAccountCounter;