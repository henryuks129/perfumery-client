import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Header from '../Layouts/Header';
import '../styles/Signin.css';
import axios from 'axios';

// const Schema = yup.object().shape({
//   Email: yup.string().email().required(),
//   Password: yup.string().min(3).max(20).required
// }

const Signin = () => {
  const [email,setEmail] = useState('')
  const [password,setpassword] = useState('')
  const navigate = useNavigate()
  // http://localhost:7878/auth/login

  const Login = async (e)=>{
    e.preventDefault()
    const logData = {
      email,
      password,
    }

    if( !email || !password ){
        alert('please fill all fields')
      }
    if(  email ||password ){
        alert('logged in')

    }
    try {
      const res =  await axios.post('http://localhost:7878/auth/login',logData)
      navigate('/')
      
    } catch (error) {
      console.log(error);
      
    }

  }
    <div>
  return (
    <div>
      {/* <NavbarAccent /> */}
      <form className="w-50 m-auto" >
        <label htmlFor="email">Email:</label><br />
        <input onChange={(e)=> setEmail(e.target.value) } value={email} className="w-100 rounded-pill border border-2 border-success" type="email" name="" id="email" /><br /><br />
        <label htmlFor="password">Password:</label><br />
        <input onChange={(e)=> setpassword(e.target.value) }  value={password} className="w-100 rounded-pill border border-2 border-success"  type="password" name="" id="password" /><br /><br />
      
        <input className="btn btn-primary" type="submit" value="Register" onClick={Login}/>
      </form>
  
    </div>
  );
    </div>

}

export default Signin