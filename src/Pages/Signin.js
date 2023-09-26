import React,{useState,useContext} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Header from '../Layouts/Header';
import '../styles/Signin.css';
import axios from 'axios';
import CartContext from '../Hooks/CartContext';

// const Schema = yup.object().shape({
//   Email: yup.string().email().required(),
//   Password: yup.string().min(3).max(20).required
// }

const Signin = () => {
  const {setLoggedIn} = useContext(CartContext)
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
      const {data} =  await axios.post('https://perfumery-server.onrender.com/auth/login',logData)
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        // alert("registration completed");
        setLoggedIn(true)
        navigate('/')
      }
    
    } catch (error) {
      if (error) {
        alert(error.response.data.errMsg);
      }
      console.log(error);      
    }
  }  
  return (
    <div>
      <Header/>
      <form className="w-50 m-auto" onSubmit={(e)=>{
        Login(e)
        console.log('submitted');

      }} >
      <label htmlFor="email">Email:</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-100 rounded-pill border border-2 border-success"
            type="email"
            name=""
            id="email"
          /><br/>
        <label htmlFor="password">Password:</label>
          <br />
          <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            className="w-100 rounded-pill border border-2 border-success"
            type="password"
            name=""
            id="password"
          /><br/>      
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
    </div>
  );
  

}

export default Signin