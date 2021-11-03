import React from 'react';
import Appointmentbanner from '../Appointmentbanner/Appointmentbanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Services></Services>
           <Appointmentbanner></Appointmentbanner>
        </div>
    );
};

export default Home;