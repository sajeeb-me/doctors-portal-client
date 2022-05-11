import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';

const Register = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }

    return (
        <section>
            <div className='text-center lg:w-2/6 mx-auto lg:shadow-xl rounded-xl p-10 m-10'>
                <h1 className='text-2xl font-semibold'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' className="input input-bordered w-full" required />
                        <label className="label">
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>

                    {/* email  */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' className="input input-bordered w-full" required />
                        <label className="label">
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>

                    {/* pass  */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name='password' className="input input-bordered w-full" required />
                        <label className="label">
                            {/* <span className="label-text-alt">Alt label</span> */}
                        </label>
                    </div>

                    {/* submit button  */}
                    <input type="submit" value="Sign Up" className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary" />
                </form>
                <p className='text-sm font-semibold mt-2'>Already have account? <Link to='/login' className='text-primary'>Login now</Link></p>

                {/* social media login  */}
                <SocialMediaLogin />
            </div>
        </section>
    );
};

export default Register;