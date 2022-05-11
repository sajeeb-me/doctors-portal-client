import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className='my-10'>
            <div>
                <p className='text-center text-secondary font-bold pb-10'>Available Appointments on {format(date, 'PP')}.</p>
            </div>
            <div className='px-4 md:px-10 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment} />)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date} />}
        </section>
    );
};

export default AvailableAppointment;