import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import doctor from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div
            style={{ backgroundImage: `url(${appointment})` }}
            className="hero px-4 lg:px-32 h-[530px] bg-cover text-white my-32">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className='h-[615px] w-[600px] mt-[-100px] hidden lg:block'>
                    <img src={doctor} alt='treatment' className="rounded-lg h-full" />
                </div>
                <div>
                    <h1 className='text-xl text-secondary font-bold'>Appointment</h1>
                    <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;