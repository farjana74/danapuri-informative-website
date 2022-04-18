import React, { useEffect, useState } from 'react';
import "./ProjectCatagory.css";


const ProjectCatagory = () => {

    const [catagories, setCatagories] = useState([])
    const [catagoriesTitle, setcatagoriesTitle] = useState([])
    const [catagoriesMenu, setcatagoriesMenu] = useState([])
    const [switchToogle, setSwitchToogle] = useState(false)


    const handleSwitchToogle = () => {

        switchToogle ? setSwitchToogle(false) : setSwitchToogle(true);
        console.log(switchToogle)
    }

    console.log(catagoriesMenu)

    // pagination start--------------------------------

    // const [product, setProduct] = useState(datas)

    // const [pageNumber, setPageNumber] = useState(0)
    // const userPage = 2;
    // const pageVisited = pageNumber * userPage;
    // const displayUsers = product.slice(pageVisited.pageVisited + userPage).map(users => {
    //     // return (


    //     // )
    // })


    // filtering catagory------------------------------

    const filterResult = (catsSlug) => {

        const result = catagories.filter((curentData) => {
            return curentData.catagories === catsSlug;
        });
        setCatagories(result)
    }

    // end filter--------------------------


    useEffect(() => {
        fetch('https://danapori.techsistltd.com/home_details/')
            .then(res => res.json())
            .then(data => {
                setCatagories(data.data.archive.archive_country_description.archive_description)
                setcatagoriesTitle(data.data.archive)
                setcatagoriesMenu(data.data.archive.archive_country_description)

            })
    }, [])

    return (




        <div className='container'>
            <h6 className='catagory-title pt-5'>{catagoriesTitle.title}</h6>
            <div className='row   justify-content-between mt-5 pb-5'>
                <div className='col-md-2'>
                    {
                        catagoriesMenu.map(catagoriesMenus => {
                            return (
                                <>
                                    <button className='border-0  w-100   catagory-menu mb-3' onClick={() => filterResult('malasia-gdjgkzxlkzxhj134636542')}>{catagoriesMenus.title}</button>


                                    {/* <button className={switchToogle ? 'active' : 'inActive'}>All</button> */}


                                </>

                                /* <button className='border-0 active   catagory-menu w-100 mb-3' onClick={() => filterResult('women')}>South Africa</button>
                                <button className='border-0 active   catagory-menu w-100 mb-3 ' onClick={() => filterResult('children')}>USA</button> 
                                <button className='border-0 active   catagory-menu w-100 mb-3' onClick={() => setCatagories(catagories)}>All</button>
                                
                                */

                            )
                        })
                    }
                </div>


                <div className='col-md-8'>

                    <div className='row gy-3  '>

                        {
                            catagories.map(products => {

                                const { id, title, price, image_url } = products

                                return (
                                    <>
                                        <div className='col-md-6'>
                                            <div class="card h-100 ">
                                                <img src={image_url} class="card-img-top" alt="..." />
                                                <div class="card-body card-height bg-primary text-white">
                                                    <p class="card-text card-description">{title}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }


                    </div>
                </div>

            </div>
        </div>


    );
};

export default ProjectCatagory;


