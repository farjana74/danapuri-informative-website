import React from 'react';

const DanapuriArchievs = ({ catagory }) => {
    const { archive_description, title } = catagory


    // const { archive_description, title } = catagory[0]

    console.log(catagory)
    return (
        <>
            <div className='col-md-2'>
                <button className='border-0 active   catagory-menu w-100 mb-3'>{title}</button>



            </div>
            <div className='col-md-8'>










                {/* <div className='row gy-3  '>

                    <div className='col-md-6'>
                        <div class="card  ">
                            <img src={product1} class="card-img-top" alt="..." />
                            <div class="card-body bg-primary text-white">
                                <p class="card-text card-description">MIDA Business Travellers Center
                                    Malaysia</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="card  ">
                            <img src={product2} class="card-img-top" alt="..." />
                            <div class="card-body bg-primary text-white">
                                <p class="card-text card-description">MIDA Business Travellers Center
                                    Malaysia</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="card  ">
                            <img src={product3} class="card-img-top" alt="..." />
                            <div class="card-body bg-primary text-white">
                                <p class="card-text card-description">MIDA Business Travellers Center
                                    Malaysia</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="card  ">
                            <img src={product4} class="card-img-top" alt="..." />
                            <div class="card-body bg-primary text-white">
                                <p class="card-text card-description">MIDA Business Travellers Center
                                    Malaysia</p>
                            </div>
                        </div>
                    </div>



                </div> */}
            </div>



        </>
    );
};

export default DanapuriArchievs;