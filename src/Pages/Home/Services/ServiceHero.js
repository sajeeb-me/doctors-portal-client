import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import Button from '../../components/Button';

const ServiceHero = () => {
    return (
        <div className="hero min-h-screen px-4 lg:px-40">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <img src={treatment} alt='treatment' className=" rounded-lg" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;