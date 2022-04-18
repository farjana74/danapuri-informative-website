import React from 'react';
import AccountListCounter from '../AccountListCounter/AccountListCounter';
import ContactForm from '../ContactForm/ContactForm';
import DhanaPuriOffers from '../DhanaPuriOffers/DhanaPuriOffers';
import DigitalEconomy from '../DigitalEconomy/DigitalEconomy';
import ProjectCatagory from '../ProjectCatagory/ProjectCatagory';
import Header from '../Shared/Header/Header';
import Navigation from '../Shared/Navigation/Navigation';
import WhyDhanaPuri from '../WhyDhanaPuri/WhyDhanaPuri';
import Banner from './Banner/Banner';
import CoreValues from './CoreValues/CoreValues';
// import AccountListCounter from '../AccountListCounter/AccountListCounter';
// import DigitalEconomy from '../DigitalEconomy/DigitalEconomy';
// import ProjectCatagory from '../ProjectCatagory/ProjectCatagory';

// import Header from '../Shared/Header/Header';

// import WhyDhanaPuri from '../WhyDhanaPuri/WhyDhanaPuri';
// import Banner from './Banner/Banner';
// import CoreValues from './CoreValues/CoreValues';

// import DhanaPuriOffers from './../DhanaPuriOffers/DhanaPuriOffers';
// import ContactForm from '../ContactForm/ContactForm';
// import Catagory from '../Catagory/Catagory';

const Home = () => {
    return (
        <div>

            <Navigation></Navigation>

            <Banner></Banner>
            <br />
            <br />
            <CoreValues></CoreValues>

            <br />
            <br />
            <br />
            <WhyDhanaPuri></WhyDhanaPuri>
            <br />
            <br />
            <DhanaPuriOffers></DhanaPuriOffers>


            <AccountListCounter></AccountListCounter>
            <DigitalEconomy></DigitalEconomy>

            <ProjectCatagory></ProjectCatagory>
            <ContactForm></ContactForm>



        </div>
    );
};

export default Home;