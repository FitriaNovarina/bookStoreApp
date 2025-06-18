import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-[400px] bg-white shadow-lg rounded-lg px-6 py-6 relative">

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Close button */}
                    <Link
                        to="/"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </Link>

                    <h3 className="font-bold text-lg">Signup</h3>

                    {/* Name */}
                    <div className='mt-4 space-y-2'>
                        <span>Name</span>
                        <input
                            type="text"
                            placeholder='Enter your fullname'
                            className='w-80 px-3 py-2 border rounded-md outline-none'
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                    </div>

                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='w-80 px-3 py-2 border rounded-md outline-none'
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                    </div>

                    {/* Password */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <input
                            type="password"
                            placeholder='Enter your password'
                            className='w-80 px-3 py-2 border rounded-md outline-none'
                            {...register("password", { required: true })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
                    </div>

                    {/* Button and Login link */}
                    <div className='flex justify-around mt-4 items-center'>
                        <button
                            type="submit"
                            className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
                        >
                            Signup
                        </button>
                        <p className='text-sm'>
                            Have account?{' '}
                            <button
                                type="button"
                                className='underline text-blue-500'
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                            >
                                Login
                            </button>
                        </p>
                    </div>

                    {/* Komponen Modal Login */}
                    <Login />
                </form>
            </div>
        </div>
    );
}

export default Signup;
