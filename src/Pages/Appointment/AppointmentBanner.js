import React from 'react';
import BannerImage from '../../assets/images/chair.png'
import BgImage from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{ backgroundImage: `url(${BgImage})` }} className='bg-cover bg-no-repeat'>
            <section className='lg:px-20'>
                <div className={`hero lg:min-h-screen`}>
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10 py-5">
                        <div className='flex-1'>
                            <img src={BannerImage} alt='chair' className="rounded-lg" />
                        </div>
                        <div className='flex-1 flex justify-center'>
                            <DayPicker
                                className='rounded-lg shadow-lg p-2'
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default AppointmentBanner;