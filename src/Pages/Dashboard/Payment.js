import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import PageLoading from '../PageLoading/PageLoading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams();

    const { data: appointment, isLoading } = useQuery(['service', id], () => fetch(`http://localhost:5000/appointment/${id}`).then(res => res.json()))
    if (isLoading) {
        return <PageLoading />
    }

    const { patientName, treatment, date, slot, price } = appointment;

    const stripePromise = loadStripe('pk_test_51L0e9UKXLIT8vsGRYvQEWCxHR0302RSzSjpHMvYk5uIRqJXzhEfAfXsDGSM45kzJjOXyk79u1gZmsM6KSXcULlrd00vAYSRIIu');

    return (
        <section className='bg-slate-100 p-4 lg:p-8 min-h-screen'>
            <h1 className='text-xl font-semibold mb-5'>Make Payment</h1>
            <div className="hero-content flex-col lg:flex-row">
                <div className="card w-full h-48 shadow-xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-secondary font-semibold'>Hello {patientName}</h1>
                        <p className='text-xl font-semibold'>Bill for : {treatment}</p>
                        <p className='text-sm'>Your appointment <span className='text-rose-600'>{date}</span> at {slot}</p>
                        <p>Please pay : <span className='font-semibold'>${price}</span></p>
                    </div>
                </div>
                <div className="card w-full h-48 shadow-xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Payment;