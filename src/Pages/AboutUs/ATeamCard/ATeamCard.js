import React from 'react';
import './ATeamCard.css';
import aTeamImg from "../../../images/a-team-card-img.svg";
import { FaFacebookF, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const ATeamCard = () => {
    return (
        <div className="col">
            <div className="a-team-card ">
                <div className="row  align-items-center">
                    <div className="col-12 col-sm-12 col-lg-6 col-md-12">
                        <img src={aTeamImg} className="img-fluid" alt="..." />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6 col-md-12">
                        <div className="">
                            <h5 className="a-team-card-title">Kieth Easler</h5>
                            <h6 className="a-team-card-degis">Executive Chairman</h6>
                            <p className="a-team-card-bio">Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec.</p>

                        </div>
                        <div className='d-flex justify-content-center align-items-center p-2'>
                            <div className='a-team-social-icon-holder'> <FaFacebookF className=' a-team-social-icon'></FaFacebookF></div>
                            <div className='a-team-social-icon-holder'><FaLinkedin className=' a-team-social-icon'></FaLinkedin></div>
                            <div className='a-team-social-icon-holder'><FaTwitter className=' a-team-social-icon'></FaTwitter></div>

                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ATeamCard;