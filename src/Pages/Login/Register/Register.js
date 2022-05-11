import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import PageLoading from '../../PageLoading/PageLoading';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    useEffect(() => {
        if (user) {
            // console.log(user);
            navigate('/')
        }
    }, [user, navigate])
    if (loading) {
        return <PageLoading />;
    }
    if (error) {
        console.log(error.message);
    }

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await sendEmailVerification();
        await updateProfile({ displayName: name });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     await createUserWithEmailAndPassword(email, password)
    //     await sendEmailVerification();
    //     await updateProfile({ displayName: name });
    // }

    return (
        <section>
            <div className='text-center lg:w-2/6 mx-auto lg:shadow-xl rounded-xl p-10 m-10'>
                <h1 className='text-2xl font-semibold'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "First name is required"
                                }
                            })}
                            className="input input-bordered w-full" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    {/* email  */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Provide a valid email'
                                }
                            })}
                            className="input input-bordered w-full" />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">Provide a valid email</span>}
                        </label>
                    </div>

                    {/* pass  */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 character or longer'
                                }
                            })}
                            className="input input-bordered w-full" />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    {/* submit button  */}
                    <input type="submit" value="Sign Up" className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary" />
                    {/* if loading  */}
                    {/* {
                        loading ?
                            <button className="loading w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary"></button>
                            :
                            <input type="submit" value="Sign Up" className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary" />
                    } */}
                </form>

                <p className='text-sm font-semibold mt-2'>Already have account? <Link to='/login' className='text-primary'>Login now</Link></p>

                {/* social media login  */}
                <SocialMediaLogin />
            </div>
        </section>
    );
};

export default Register;