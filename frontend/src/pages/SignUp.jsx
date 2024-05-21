import React, { useEffect } from 'react';
import Quote from '../components/Quote';
import { useForm } from 'react-hook-form';
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios';
import { login,tokenSet } from '../redux/slices/auth.slice';
const BACKEND_URL=import.meta.env.VITE_APP_BACKEND_URL
const SignUp = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const { register, handleSubmit,reset, formState: { errors,isSubmitSuccessful } } = useForm();

  const onSubmit = (data) => {
    try {
      const{username,email,password}=data
      console.log(data, ">>data");
      const response=axios.post(`${BACKEND_URL}/user/sign-Up`,{
        username,
        email,
        password
      });
      console.log(response,"user data")

      if(!response){
        throw new Error(response.data.message)
      }
      
      navigate('/Login')


      
    } catch (error) {
      console.log(error,">>error while creating account")
      navigate('/signup')
      
    }

    
  };
  useEffect(()=>{
    if(isSubmitSuccessful){
      reset({
        username:"",
        email:"",
        password:""
      })
    }
  },[reset,isSubmitSuccessful])

  return (
    <>
      <div className='grid grid-cols-2 min-h-screen'>
        <div className='flex flex-col justify-center items-center bg-gray-100 p-8'>
          <div>
            <h2 className=' text-gray-700 font-bold mb-2'>Create Account</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-lg rounded-lg p-6 w-full max-w-sm'>
            <div className='mb-4'>
              <label htmlFor='username' className='block text-gray-700 font-bold mb-2'>Username</label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                id='username'
                placeholder='abhyudaya@29'
                type='text'
                {...register('username', { required: 'Username is required' })}
              />
              {errors.username && <p className='text-red-500 text-xs italic'>{errors.username.message}</p>}
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>Email</label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                id='email'
                placeholder='abc@gmail.com'
                type='email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                  }
                })}
              />
              {errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>Password</label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                id='password'
                placeholder='1234'
                type='password'
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className='text-red-500 text-xs italic'>{errors.password.message}</p>}
            </div>
            <div className='flex items-center justify-between'>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className='flex flex-col  text-gray-700 font-bold mb-2'>
            Already Have an account?
            <Link to={'/Login'}>
            <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '>Login</button>
            </Link>
          </div>
        </div>
        <Quote />
      </div>
    </>
  );
};

export default SignUp;
