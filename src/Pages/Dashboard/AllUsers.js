import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import PageLoading from '../PageLoading/PageLoading';
import UserRow from './UserRow';

const AllUsers = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
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
        <section className='bg-slate-100 p-4 lg:p-8 h-screen'>
            <h1 className='text-xl font-semibold mb-5'>All Users</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Make admin</th>
                                <th>Delete user</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <UserRow
                                    key={user._id}
                                    user={user}
                                    refetch={refetch}
                                    index={index} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllUsers;