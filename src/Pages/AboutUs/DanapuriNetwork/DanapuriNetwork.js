import React from 'react';
import './DanapuriNetwork.css';
import logo1 from '../../../images/danapori-network/Logo-1.svg';
import logo2 from '../../../images/danapori-network/Logo-2.svg';
import logo3 from '../../../images/danapori-network/Logo-3.svg';
import logo4 from '../../../images/danapori-network/Logo-4.svg';
import logo5 from '../../../images/danapori-network/Logo-5.svg';

const DanapuriNetwork = () => {
    return (
        <div className='container-fluid py-5'>
            <div className="container">
                <h2 className="danapuri-network-title">Danapuri network</h2>
                <p className="danapuri-network-sub-desc pb-5 m-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>

                {/* client profile  */}
                <div className="danapuri-client-profile ">
                    <h4 className='danapuri-network-all-title'>Client Portfolio</h4>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-md-5 g-2 ">
                        <div className="col">
                            <img src={logo1} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo2} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo3} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo4} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo5} alt="" className='img-fluid pe-2' />
                        </div>

                    </div>
                </div>
                {/* Strategic Partners */}
                <div className="danapuri-strategic-partners ">
                    <h4 className='danapuri-network-all-title'>Strategic Partners</h4>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-md-5 g-2 ">
                        <div className="col">
                            <img src={logo1} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo2} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo3} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo4} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo5} alt="" className='img-fluid pe-2' />
                        </div>

                    </div>
                </div>

                {/* Public Relations */}
                <div className="danapuri-public-relations ">
                    <h4 className='danapuri-network-all-title'>Public Relations</h4>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-md-5 g-2 ">
                        <div className="col">
                            <img src={logo1} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo2} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo3} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo4} alt="" className='img-fluid pe-2' />
                        </div>
                        <div className="col">
                            <img src={logo5} alt="" className='img-fluid pe-2' />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default DanapuriNetwork;