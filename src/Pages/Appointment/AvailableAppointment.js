import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query'
import PageLoading from '../PageLoading/PageLoading';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const appointmentDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', appointmentDate], () => fetch(`https://secret-hollows-98453.herokuapp.com/available?date=${appointmentDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <PageLoading />
    }

    return (
        <section className='my-10'>
            <div>
                <p className='text-center text-secondary font-bold pb-10'>Available Appointments on {appointmentDate}.</p>
            </div>
            <div className='px-4 md:px-10 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment} />)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
                date={date} />}
        </section>
    );
};

export default AvailableAppointment;