import React from 'react';
import { useQuery } from 'react-query';
import PageLoading from '../PageLoading/PageLoading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))
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
                                <th>Date</th>
                                <th>Time</th>
                                <th>Treatment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <UserRow key={user._id} user={user} index={index} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllUsers;