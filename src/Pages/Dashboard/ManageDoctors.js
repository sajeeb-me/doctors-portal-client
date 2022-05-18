import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageLoading from '../PageLoading/PageLoading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
    const navigate = useNavigate();
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://secret-hollows-98453.herokuapp.com/doctor', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem('accessToken')
                navigate('/login')
            }
            return res.json()
        }))
    if (isLoading) {
        return <PageLoading />
    }
    return (
        <section className='bg-slate-100 p-4 lg:p-8 min-h-screen'>
            <h1 className='text-xl font-semibold mb-5'>Manage Doctors</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Specialty</th>
                                <th>Delete doctor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors?.map((doctor, index) => <DoctorsRow
                                    key={doctor._id}
                                    doctor={doctor}
                                    setDeletingDoctor={setDeletingDoctor}
                                    index={index} />)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deletingDoctor && <DeleteConfirmModal
                        deletingDoctor={deletingDoctor}
                        refetch={refetch}
                        setDeletingDoctor={setDeletingDoctor}
                    />
                }
            </div>
        </section>
    );
};

export default ManageDoctors;