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
    <div>
      <Header/>
      <div className='container'>
        <div className='text-center'>
          <h1>Password Reset</h1>
          <p>Enter your new password</p>
        </div>
        <form action="" method=''>
        <label htmlFor=''>Password</label><br/>
      <input type='password' id='password' name='Password' {...register('Password', { required: true })} placeholder='Placeholder' className=''/>
      {errors.Password && <p>Password is required.</p>}<br/><br/>
      <label htmlFor=''>ConfirmPassword</label><br/>
      <input type='password' id='ConfirmPassword' name='ConfirmPassword' {...register('ConfirmPassword', { required: true })} placeholder='Placeholder' className=''/>
      <p>{errors.ConfirmPassword && "Passwords don't match"}</p><br/><br/>
        </form>
        <button className='reset-button border-0' onClick={handleSubmit(submitForm)}>Save</button>
      </div>
    </div>
  )
}

export default PasswordReset