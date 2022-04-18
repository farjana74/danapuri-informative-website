import React, { useEffect, useState } from 'react';
// import dhana from "../../images/whyDanapuri.png";
import "./WhyDhanaPuri.css";

const WhyDhanaPuri = () => {
    const [whyDanapuri, setWhyDanapuri] = useState([])

    // console.log(whyDanapuri)
    useEffect(() => {
        fetch('https://danapori.techsistltd.com/home_details/')
            .then(res => res.json())
            .then(data => setWhyDanapuri(data.data.about_danapuri))
    }, [])
    return (
        // <div class="container">
        //     <div class="left"></div>
        //     <div class="right">
        //         <div class="content">
        //             <h1>This is a heading</h1>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda dolore reprehenderit ullam blanditiis ex sapiente pariatur tempore incidunt facilis?</p>
        //             <a href="#" class="btn">Click Me</a>
        //         </div>
        //     </div>
        // </div>

        <div className='container-fluid'>
            <div className='container danapuriOffers-bg  position-relative'>
                {/* <img className='' src={whyDanapuri.image_url} alt="" /> */}
                <div className='row'>
                    <div className='col-md-6'>

                    </div>
                    <div className='col-md-5  whyDanaPuri-card  text-white      position-absolute top-50 start-100  translate-middle '>
                        <h2 className='whyDanapuri-title '>{whyDanapuri.title}</h2>
                        <p className='whyDanapuri-description '>{whyDanapuri.description}</p>
                        <button className=' border-0 button-text p-2'>{whyDanapuri.button_text}</button>

                    </div>

                </div>


            </div>

        </div>



    );
};

export default WhyDhanaPuri;