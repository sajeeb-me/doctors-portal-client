import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    const opening = {
        title: "Opening Hours",
        text: "Lorem Ipsum is simply dummy text of the pri",
        className: "bg-gradient-to-r from-secondary to-primary"
    };
    const location = {
        title: "Visit our location",
        text: "Brooklyn, NY 10036, United States",
        className: "bg-accent"
    };
    const contact = {
        title: "Contact us now",
        text: "+000 123 456789",
        className: "bg-gradient-to-r from-secondary to-primary"
    };
    return (
        <div className='px-4 md:px-10 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard img={clock} text={opening} />
            <InfoCard img={marker} text={location} />
            <InfoCard img={phone} text={contact} />
        </div>
    );
};

export default Info;