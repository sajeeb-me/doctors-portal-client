import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';

const Login = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <section>
            <div className='text-center lg:w-2/6 mx-auto lg:shadow-xl rounded-xl p-10 m-10'>
                <h1 className='text-2xl font-semibold'>Login</h1>
                <form onSubmit={handleSubmit}>
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

                        {/* forget pass  */}
                        <p className='text-left mb-3'>
                            <button className='font-semibold'>Forget password?</button>
                        </p>
                    </div>

                    {/* submit button  */}
                    <input type="submit" value="Sign Up" className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary" />
                </form>
                <p className='text-sm font-semibold mt-2'>New to Doctors Portal? <Link to='/register' className='text-primary'>Create an account</Link></p>

                {/* social media login  */}
                <SocialMediaLogin />
            </div>
        </section>
    );
};

export default Login;