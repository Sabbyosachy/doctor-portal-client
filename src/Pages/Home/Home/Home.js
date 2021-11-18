import React from 'react';
import Appointmentbanner from '../Appointmentbanner/Appointmentbanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Services></Services>
           <Doctors></Doctors>
           <Appointmentbanner></Appointmentbanner>
        </div>
    );
};

export default Home;