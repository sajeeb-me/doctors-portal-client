import React from 'react';
import BannerImage from '../../assets/images/chair.png'
import BgImage from '../../assets/images/bg.png';
import Button from '../components/Button';

const TopBanner = () => {
    return (
        <div style={{ backgroundImage: `url(${BgImage})` }} className='bg-cover bg-no-repeat'>
            <section className='lg:px-20'>
                <div className={`hero lg:min-h-screen`}>
                    <div className="hero-content flex-col lg:flex-row-reverse md:gap-10">
                        <div>
                            <img src={BannerImage} alt='chair' className="rounded-lg" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            <Button />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default TopBanner;