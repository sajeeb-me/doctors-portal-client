import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/appointment?patient=${user?.email}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [user])

    return (
        <section className='bg-slate-100 p-4 lg:p-8 h-screen'>
            <div className='flex justify-between mb-5'>
                <h1 className='text-xl font-semibold'>My Appointments</h1>
                <button className='btn btn-outline btn-sm'>Date</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Treatment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointment.map(a => <tr key={a._id} className='hover'>
                                    <th>#</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default MyAppointments;