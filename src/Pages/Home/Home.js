import React from 'react';
import Appointment from './Appointment';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <Info />
            <Services />
            <Appointment />
            <Testimonial />
        </div>
    );
};

export default Home;