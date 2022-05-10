import React from 'react';
import BannerImage from '../../assets/images/chair.png'

const TopBanner = () => {
    return (
        <div className='px-4 md:px-20'>
            <section>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row-reverse gap-10">
                        <div>
                            <img src={BannerImage} alt='chair' class="rounded-lg" />
                        </div>
                        <div>
                            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                            <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                            <button class="btn btn-primary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopBanner;