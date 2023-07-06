import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Header from '../Layouts/Header';
import '../styles/Signin.css';

const Schema = yup.object().shape({
  Email: yup.string().email().required(),
  Password: yup.string().min(3).max(20).required(),
})

const Signin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(Schema)});

  const submitForm = (data) =>{

  }

  return (
    <div>
      <Header/>
      <div className='container sigin-body mt-5'>
        <div className='signin-home-body'>
        <div className='text-center'>
          <h1 className='signin-header'>Sign Into Your Account</h1>
          <p className='signin-text mt-4 mb-4'>Sign In with Your Email and Password</p>
        </div>
        <form action="" method='POST'>
          <label htmlFor="">Email</label><br/>
          <input type='email' id='email' name='Email' {...register('Email', {required: true})} placeholder='Placeholder' className='input-body'/>
          <p className='mb-3'>{errors.Email?.message}</p>
      <label htmlFor=''>Password</label><br/>
      <input type='password' id='password' name='Password' {...register('Password', { required: true })} placeholder='Placeholder' className='input-body'/>
      <p className='mb-3'>{errors.Password?.message}</p>
        </form>
        <div>
          <p className='text-decoration-underline mb-4' onClick={()=>{navigate('/ForgottenPassword')}}>Forgot password?</p>
          <input type="checkbox" />
          <label htmlFor="">Remember me (optional)</label>
          <p className='legal-statement-text mb-4 mt-1'>By providing my information, I agree to Fame Perfumery's <span className='text-decoration-underline'>Privacy Providing and Legal Statement</span></p>
        </div>
        <button className='signin-button border-0' onClick={handleSubmit(submitForm)}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Signin