import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <section className='px-0 md:px-20'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabindex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <div tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to='/'>Home</Link>
                                <Link to='/about'>About</Link>
                                <Link to='/appointment'>Appointment</Link>
                                <Link to='/reviews'>Reviews</Link>
                                <Link to='/contact'>Contact Us</Link>
                            </div>
                        </div>
                        <Link to='/'>Doctors Portal</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <CustomLink className='px-3 py-2 rounded-lg hover:text-primary' to='/'>Home</CustomLink>
                        <CustomLink className='px-3 py-2 rounded-lg hover:text-primary' to='/about'>About</CustomLink>
                        <CustomLink className='px-3 py-2 rounded-lg hover:text-primary' to='/appointment'>Appointment</CustomLink>
                        <CustomLink className='px-3 py-2 rounded-lg hover:text-primary' to='/reviews'>Reviews</CustomLink>
                        <CustomLink className='px-3 py-2 rounded-lg hover:text-primary' to='/contact'>Contact Us</CustomLink>
                    </div>
                    <div className="navbar-end">
                        <Link to='/login' className="btn btn-primary text-white">Login</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;