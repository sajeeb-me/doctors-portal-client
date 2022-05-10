import React from 'react';
import Button from '../components/Button';
import doctor from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <div
            style={{ backgroundImage: `url(${appointment})` }}
            className="hero px-4 lg:px-32 h-[533px] bg-cover text-white">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-20">
                <img src={doctor} alt='treatment' className="rounded-lg hidden lg:flex " />
                <div>
                    <h1 className='text-xl text-secondary font-bold'>Appointment</h1>
                    <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default Appointment;