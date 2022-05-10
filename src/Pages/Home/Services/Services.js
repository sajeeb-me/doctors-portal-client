import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceHero from './ServiceHero';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting induct Ipsum has been the",
            img: fluoride
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting induct Ipsum has been the",
            img: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting induct Ipsum has been the",
            img: whitening
        }
    ]
    return (
        <div className='my-10'>
            <p className='text-center uppercase font-bold text-primary'>Our Services</p>
            <p className='text-center text-3xl my-2'>Services We Provide</p>
            <section className='px-4 md:px-10 my-20 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service} />)
                }
            </section>
            <ServiceHero />
        </div>
    );
};

export default Services;