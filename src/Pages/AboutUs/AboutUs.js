import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import img1 from '../../images/about-banner-img-1.svg';
import img2 from '../../images/about-banner-img-2.svg';
import img3 from '../../images/about-banner-img-1.svg';
import CorporateValues from './CorporateValues/CorporateValues';
import ATeam from './ATeam/ATeam';
import Footer from '../Shared/Footer/Footer';
import DanapuriNetwork from './DanapuriNetwork/DanapuriNetwork';
import Navigation from '../Shared/Navigation/Navigation';

const AboutUs = () => {

    const [about, setAbout] = useState({});
    console.log(about);

    useEffect(() => {
        fetch("https://danapori.techsistltd.com/about_page_details/")
            .then(res => res.json())
            .then(data => setAbout(data?.data))
    }, [])

    return (
        <>
            <Navigation></Navigation>
            <div className='container-fluid py-5 about-banner-holder'>
                <div className="container mx-auto py-5">

                    {/* about banner  */}
                    <h1 className='about-banner-header-title'>{about?.title}</h1>
                    <p className='about-banner-header-subtxt'>{about?.description}</p>
                    <div className='about-banner-img-container'>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1  ">

                            {about?.about_description?.map((aboutImg, index) => {
                                return <div className='col'>
                                    <img src={aboutImg.image_url} alt="" className='img-fluid m-2 p-2 rounded-3' />
                                </div>
                            })

                            }

                        </div>

                    </div>

                </div>
            </div>
            <div className='container-fluid about-goal-vision-holder py-lg-5  px-lg-5'>
                <div className="mx-auto ">

                    <div className="row  gx-0 py-3 " >

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-start px-3 py-3">
                            <h6 className='about-goal-vision-sub-title'>{about?.mission_details?.title}</h6>
                            <h1 className='about-goal-vision-title'>{about?.mission_details?.description}</h1>
                            <p className='about-goal-vision-desc-txt'>{about?.mission_details?.sub_description}</p>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-start px-3 py-3">
                            <h6 className='about-goal-vision-sub-title'>{about?.vision_details?.title}</h6>
                            <h1 className='about-goal-vision-title'>{about?.vision_details?.description}</h1>
                            <p className='about-goal-vision-desc-txt'>{about?.vision_details?.sub_description}</p>
                        </div>

                    </div>
                </div>
            </div>
            <CorporateValues about={about}></CorporateValues>
            <ATeam></ATeam>
            <DanapuriNetwork></DanapuriNetwork>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;