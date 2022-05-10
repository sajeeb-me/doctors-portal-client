import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import Quotes from './Quotes';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
            img: "https://api.lorem.space/image/face?hash=3174",
            name: "Winson Herry",
            country: "California"
        },
        {
            id: 2,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
            img: "https://api.lorem.space/image/face?hash=3174",
            name: "Winson Herry",
            country: "California"
        },
        {
            id: 3,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
            img: "https://api.lorem.space/image/face?hash=3174",
            name: "Winson Herry",
            country: "California"
        }
    ]
    return (
        <div className='px-4 lg:px-20 my-20'>
            <section className='flex justify-between gap-5'>
                <div>
                    <p className='uppercase font-bold text-primary'>Testimonial</p>
                    <p className='text-3xl my-2'>What Our Patients Says</p>
                </div>
                <img src={quote} alt="" className='w-[100px] lg:w-[192px]' />
            </section>
            <section className='px-4 md:px-10 my-20 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    testimonials.map(testimonial => <Quotes key={testimonial.id} testimonial={testimonial} />)
                }
            </section>
        </div>
    );
};

export default Testimonial;