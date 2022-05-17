import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://secret-hollows-98453.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made and admin!')
                }
            })
    }

    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role ||
                <button onClick={makeAdmin} className="btn btn-xs btn-secondary text-white">Make admin</button>
            }</td>
            <td><button className="btn btn-xs btn-error">Delete user</button></td>
        </tr>
    );
};

export default UserRow;