import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Layouts/Header';
import '../styles/ForgottenPassword.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
    <div>
      <Header/>
      <div className='container'>
        <div className='text-center'>
          <h1 className='forgotten-header'>Forgotten Password</h1>
          <p>Enter Your Email to reset password</p>
        </div>
        <form action='' method='POST'>
        <label htmlFor="">Email</label><br/>
          <input type='email' id='email' name='Email' {...register('Email', {required: true})} placeholder='Placeholder' className=''/>
          <p>{errors.Email?.message}</p><br/><br/>
        </form>
          <button className='forgotten-password-button border-0' onClick={handleSubmit(submitForm)}>Reset Your Password</button>
      </div>
    </div>
  )
}

export default ForgottenPassword