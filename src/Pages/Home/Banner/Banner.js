import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import bannerLogo from "../../../images/Hero (1).png"
// import Banners from './../../Banners/Banners';
import "./Banner.css";

const Banner = () => {
    const [bannerPage, setBannerPage] = useState([])
    // console.log(bannerPage)
    useEffect(() => {
        fetch('https://danapori.techsistltd.com/home_details/')
            .then(res => res.json())
            .then(data => setBannerPage(data.data.slider))
    }, [])
    return (

        <div className='banner-container mb-5 container'>
            {/* <video className=' className=' w-100 h-100 src={bannerPage.file_url} preload="auto" >

            </video> */}

            <video className='w-100 h-100' autoPlay loop muted >
                <source src={bannerPage.file_url} type="video/mp4" />
            </video>

            <div className='banner-text container ms-5 '>
                <h1 className='banners-text'>{bannerPage.title}</h1>

            </div>

        </div>





        // <div className='section mt-2'>

        //     <h1 className=''>{bannerPage.title}</h1>
        //     <div className='video-container'>
        //         <div className='color-overlay'>

        //         </div>

        //         <video className='w-100' autoPlay loop muted>
        //             {/* <ReactPlayer url='https://da-+napori.techsistltd.com/media/slider/Gameplay_.mp4' /> */}
        //             <source src={bannerPage.file_url} type="video/mp4" />

        //         </video>
        //     </div>


        // </div >
    );
};

export default Banner;