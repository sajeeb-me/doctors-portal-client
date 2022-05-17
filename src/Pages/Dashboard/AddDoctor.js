import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import PageLoading from '../PageLoading/PageLoading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data, isLoading } = useQuery('specialty', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey = 'c1e87660595242c0175f82bb850d3e15';

    if (isLoading) {
        return <PageLoading />
    }

    /**
     * 3 ways to store image
     * 1. Third party image
     * 2. Your own storage in your own server
     * 3. Database: Mongodb
     * 
     * YUP: to validate file (search: yup file validation for react hook form)
    */

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // console.log('doctor',doctor);
                    // send to database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully!')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Doctor!')
                            }
                        })
                }
            })
    };

    return (
        <section className='bg-slate-100 p-4 lg:p-8 min-h-screen'>
            <h1 className='text-xl font-semibold mb-5'>Add a Doctor</h1>
            <section>
                <div className='text-center lg:w-3/6 mx-auto lg:shadow-xl rounded-xl p-10'>
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

                        {/* specialty  */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Specialty</span>
                            </label>
                            <select
                                // type="select"
                                {...register("specialty")}
                                className="select select-bordered w-full mb-3">
                                {
                                    data.map(d => <option key={d._id} value={d.name}>{d.name}</option>)
                                }
                            </select>
                        </div>

                        {/* image  */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Image</span>
                            </label>
                            <input
                                type="file"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    }
                                })}
                                className="input input-bordered w-full p-2" />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>

                        {/* submit button  */}
                        <input type="submit" value="Add" className="w-full btn btn-primary font-semibold text-white bg-gradient-to-r from-secondary to-primary" />

                    </form>
                </div>
            </section>
        </section >
    );
};

export default AddDoctor;