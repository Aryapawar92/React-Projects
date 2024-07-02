import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {loginSuccess, logout } from '../../features/Userslice';
import { Navigate, useNavigate } from 'react-router-dom';

function SignIn() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedInUser = {
      name: formData.name,
      email: formData.email,
    };

    dispatch(loginSuccess(loggedInUser));
    navigate('/signout');
  }

 

  return (
    <div className='text-white h-[100vh] flex items-center justify-center'>
      <div>
        <div className='bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative'>
          <h1 className='text-4xl font-bold text-center'>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className='relative my-4'>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' 
                placeholder='' 
                required 
              />
              <label className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
            </div>
            <div className='relative my-4'>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' 
                placeholder='' 
                required 
              />
              <label className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
            </div>
            <button type='submit' className='w-full mb-4 text-[18px] rounded bg-blue-500 py-2 hover:bg-blue-700 transition-colors duration-300 '>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
    
}

export default SignIn