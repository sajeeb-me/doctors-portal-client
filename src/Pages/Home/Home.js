import React from 'react';
import ContactUs from './ContactUs/ContactUs';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import TopBanner from './TopBanner';
import MakeAppointment from './MakeAppointment';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;