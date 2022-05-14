import React from 'react';

const UserRow = ({ user, index }) => {
    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>Information</td>
            <td>Information</td>
            <td>Information</td>
        </tr>
    );
};

export default UserRow;