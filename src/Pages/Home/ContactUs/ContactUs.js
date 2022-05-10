import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div
            style={{ backgroundImage: `url(${appointment})` }}
            className="mt-20 px-4 lg:px-32 h-[533px] bg-cover text-white flex justify-center items-center">
            <div>
                <div className='text-center'>
                    <h1 className='text-xl text-secondary font-bold'>Contact Us</h1>
                    <h1 className="text-4xl">Stay connected with us</h1>
                </div>
                <form onSubmit={handleSubmit} className='mt-10 text-black'>
                    <input type="email" placeholder="Email address" className="input w-full mb-3" />
                    <input type="text" placeholder="Subject" className="input w-full mb-3" />
                    <textarea className="textarea w-full" placeholder="Your message"></textarea>
                    <p className='text-center mt-10'>
                        <input type="submit" className='btn btn-primary px-10 font-bold text-white bg-gradient-to-r from-secondary to-primary' value="Submit" />
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;