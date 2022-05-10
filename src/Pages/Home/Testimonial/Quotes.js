import React from 'react';

const quotes = ({ testimonial }) => {
    const { text, img, name, country } = testimonial;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{text}</p>
                <div className='flex items-center gap-5 mt-5'>
                    <div class="avatar">
                        <div class="w-[64px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-left font-bold'>{name}</h1>
                        <p className='text-sm'>{country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default quotes;