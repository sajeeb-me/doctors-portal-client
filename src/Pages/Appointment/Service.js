import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-md">
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length
                            ? slots[0]
                            : <span className='text-yellow-400'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button disabled={slots.length === 0} className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;