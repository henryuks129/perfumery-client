import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../Layouts/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css';

const Schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  Email: yup.string().email().required(),
  Password: yup.string().min(3).max(20).required(),
})

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(Schema)});
  // if(!firstName || !lastName || !Email || !Password){
  //   alert('All input filled must be filled')
  // }

  const submitForm = (data) =>{

  }

  return (
    <div className='mb-5'>
      <Header/>
      <div className='container signin-body'>
        <div className='signup-home-body'>
        <div className='mt-5'>
          <h1 className='text-center signin-header'>Create Your Account</h1>
          <p className='mt-4 mb-4 signin-header-text'>Create an account and benefit from a more personal shopping experience, and quicker online checkout.</p>
        </div>
      <form action='' method='POST' onSubmit={handleSubmit(submitForm)}>
      <label htmlFor='email' className=''>Email</label><br/>
      <input type='email' id='email' name='Email' {...register('Email', {required: true})} placeholder='Placeholder' className='input-body'/>
      {errors.Email && <p>Email is required.</p>}<br/><br/>
      <label htmlFor="firstName" className=''>First Name</label><br/>  
      <input type='text' id='firstName' name='firstName' {...register('firstName', { required: true })} placeholder='Placeholder' className='input-body'/>
      {errors.firstName && <p>First Name is required.</p>}<br/><br/>
      <label htmlFor="lastName" className=''>Last Name</label><br/>
      <input type='text' id='lastName' name='lastName' {...register('lastName', { required: true })} placeholder='Placeholder' className='input-body'/>
      {errors.lastName && <p>First Name is required.</p>}<br/><br/>
      <label htmlFor="password" className=''>Password</label><br/>
      <input type='password' id='password' name='Password' {...register('Password', { required: true })} placeholder='Placeholder' className='input-body'/>
      {errors.Password && <p>Password is required.</p>}<br/><br/>
    </form>
      <div className='legal-statement-body'>
      <p className='legal-statement mt-1'>By providing my information, I agree to Fame Perfumery's <span className='text-decoration-underline' onClick={()=>{navigate('/')}}>Privacy Policy and <br/>Legal Statement</span></p>
    </div>
      <button onClick={handleSubmit(submitForm)} className='signup-button border-0'>Create Account</button>
    {/* <div className='legal-statement-body'>
      <p className='legal-statement mt-5'>By providing my information, I agree to Fame Perfumery's <span className='text-decoration-underline' onClick={()=>{navigate('/')}}>Privacy Policy and Legal Statement</span></p>
    </div> */}
        </div>
    </div>
    </div>
  )
}

export default Signup