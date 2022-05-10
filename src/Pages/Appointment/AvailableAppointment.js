import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div>
                <p className='text-center text-secondary font-bold pb-10'>Available Appointments on {format(date, 'PP')}.</p>
            </div>
            <div>
                {services.length}
            </div>
        </section>
    );
};

export default AvailableAppointment;