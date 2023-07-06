import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Layouts/Header';
import '../styles/ForgottenPassword.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, link } from 'react-router-dom';

const Schema = yup.object().shape({
  Email: yup.string().email().required(),
})

const ForgottenPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(Schema)});

  const submitForm = (data) =>{

  }
  return (
    <div className='password-main-body'>
      <Header/>
      <div className='container passowrd-main'>
        <div className='password-body'>
        <div className='text-center'>
          <h1 className='forgotten-header'>Forgotten Password</h1>
          <p className='forgotten-text'>Enter Your Email to reset password</p>
        </div>
        <form action='' method='POST' className='mb-4'>
        <label htmlFor="" className='input-label'>Email</label><br/>
          <input type='email' id='email' name='Email' {...register('Email', {required: true})} placeholder='Placeholder' className='input-body'/>
          <p>{errors.Email?.message}</p>
        </form>
          <Link to='/PasswordReset'>
          <button className='forgotten-password-button border-0' onClick={handleSubmit(submitForm)}>Reset Your Password</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgottenPassword