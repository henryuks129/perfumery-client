import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Header from '../Layouts/Header';
import { useNavigate } from 'react-router-dom';
import '../styles/PasswordReset.css';

const Schema = yup.object().shape({
  Password: yup.string().min(3).max(20).required(),
  ConfirmPassword: yup.string().oneOf([yup.ref("Password"), null])
})

const PasswordReset = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(Schema)});

  const submitForm = (data) =>{

  }
  return (
    <div className='reset-main-body'>
      <Header/>
      <div className='container reset-main mt-4'>
        <div className='reset-body'>
        <div className='text-center'>
          <h1 className='reset-header'>Password Reset</h1>
          <p className='reset-text'>Enter your new password</p>
        </div>
        <form action="" method=''>
        <label htmlFor=''>Password</label><br/>
      <input type='password' id='password' name='Password' {...register('Password', { required: true })} placeholder='Placeholder' className='input-body'/>
      {errors.Password && <p>Password is required.</p>}<br/><br/>
      <label htmlFor=''>Confirm New Password</label><br/>
      <input type='password' id='ConfirmPassword' name='ConfirmPassword' {...register('ConfirmPassword', { required: true })} placeholder='Placeholder' className='input-body'/>
      <p>{errors.ConfirmPassword && "Passwords don't match"}</p><br/>
        </form>
        <button className='reset-button border-0' onClick={handleSubmit(submitForm)}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default PasswordReset