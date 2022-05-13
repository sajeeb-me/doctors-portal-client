import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PrimaryButton from '../../components/PrimaryButton';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const logout = () => {
        signOut(auth)
        navigate('/')
    };

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }


    </>
    return (
        <div className='bg-base-100 sticky top-0 z-10'>
            <section className='lg:px-20'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <Link className='text-xl font-bold' to='/'>Doctors Portal</Link>
                    </div>
                    <div className="navbar hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <ul className="menu menu-horizontal p-0">
                            {
                                user ?
                                    <button onClick={logout} className="btn btn-secondary text-white">Logout</button>
                                    :
                                    <Link to='/login'><PrimaryButton>Login</PrimaryButton></Link>
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;