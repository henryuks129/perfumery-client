import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "../Layouts/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [passwordVerify, setpasswordVerify] = useState("");
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  //  function regsub(e){
  //   e.preventDefault()
  //   const regData = {
  //     email,
  //     firstname,
  //     lastname,
  //     password,
  //     passwordVerify
  //   }
  //   // const res =  await axios.post('https://perfumery-server.onrender.com/auth/register',regData)
  //   navigate('/Signin')

  //   console.log(123);
  // }

  async function Register(e) {
    e.preventDefault();
    console.log(12);
    setIsAuthenticating(true)
    try {
      const regData = {
        email,
        firstname,
        lastname,
        password,
        passwordVerify,
      };

      // const { data } = await axios.post(
      //   "https://perfumery-server.onrender.com/auth/register",
      //   regData
      // );
      const {data} = await axios.post("https://perfumery-server.onrender.com/auth/register",regData)
      // console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("registration completed");
      }
      navigate("/Signin");
      setIsAuthenticating(false)
    } catch (error) {
      if (error) {
        // alert(error.response.data.errMsg);
      }
      console.log(error);
    }
    setIsAuthenticating(false)
  }
  return (
    <div>
      <Header />
      <div className="container">
        <form className="w-50 m-auto" onSubmit={(e)=>{
          Register(e)
          console.log('submitted');

        }}>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-100 rounded-pill border border-2 border-success"
            type="email"
            name=""
            id="email"
          />
          <br />
          <br />
          <label htmlFor="firstname">Firstname:</label>
          <br />
          <input
            onChange={(e) => setfirstname(e.target.value)}
            value={firstname}
            className="w-100 rounded-pill border border-2 border-success"
            type="text"
            name=""
            id="firstname"
          />
          <br />
          <br />
          <label htmlFor="lastname">Lastname:</label>
          <br />
          <input
            onChange={(e) => setlastname(e.target.value)}
            value={lastname}
            className="w-100 rounded-pill border border-2 border-success"
            type="text"
            name=""
            id="lastname"
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            className="w-100 rounded-pill border border-2 border-success"
            type="password"
            name=""
            id="password"
          />
          <br />
          <br />
          <label htmlFor="Verifypassword">Verify password:</label>
          <br />
          <input
            onChange={(e) => setpasswordVerify(e.target.value)}
            value={passwordVerify}
            className="w-100 rounded-pill border border-2 border-success"
            type="password"
            name=""
            id="Verifypassword"
          />
          <br />
          <br />
          {isAuthenticating ? <span className="spinner"></span> : <input
            className="btn btn-primary"
            type="submit"
            value="Register"
          />}
          {/* <button onClick={regsub}>regsubmit</button> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;

// const Schema = yup.object().shape({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   Email: yup.string().email().required(),
//   Password: yup.string().min(3).max(20).required(),
//   ConfirmPassword: yup.string().oneOf([yup.ref("Password"), null])
// })

// const Signup = () => {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({resolver: yupResolver(Schema)});
//   // if(!firstName || !lastName || !Email || !Password){
//   //   alert('All input filled must be filled')
//   // }

//   const submitForm = (data) =>{
//     axios.post('https://perfumery-server.onrender.com/auth/register',register)
//   }
//   // function handlePost(e){
//   //   e.preventDefault();
//   //   axios.post('https://perfumery-server.onrender.com/auth/register',register)
//   // }
//   return (
//     <div className='mb-5'>
//       <Header/>
//       <div className='container signin-body'>
//         <div className='signup-home-body'>
//         <div className='mt-5'>
//           <h1 className='text-center signin-header'>Create Your Account</h1>
//           <p className='mt-4 mb-4 signin-header-text'>Create an account and benefit from a more personal shopping experience, and quicker online checkout.</p>
//         </div>
//       <form action='' method='POST' onSubmit={handleSubmit}>
//       <label htmlFor='email' className=''>Email</label><br/>
//       <input type='email' id='email' name='Email' onChange={(e)=>e.target.value} {...register('Email', {required: true})} placeholder='Placeholder' className='input-body'/>
//       {errors.Email && <p>Email is required.</p>}<br/><br/>
//       <label htmlFor="firstName" className=''>First Name</label><br/>
//       <input type='text' id='firstName' name='firstName' onChange={(e)=>e.target.value} {...register('firstName', { required: true })} placeholder='Placeholder' className='input-body'/>
//       {errors.firstName && <p>First Name is required.</p>}<br/><br/>
//       <label htmlFor="lastName" className=''>Last Name</label><br/>
//       <input type='text' id='lastName' name='lastName' onChange={(e)=>e.target.value} {...register('lastName', { required: true })} placeholder='Placeholder' className='input-body'/>
//       {errors.lastName && <p>First Name is required.</p>}<br/><br/>
//       <label htmlFor="password" className=''>Password</label><br/>
//       <input type='password' id='password' name='Password' onChange={(e)=>e.target.value} {...register('Password', { required: true })} placeholder='Placeholder' className='input-body'/>
//       {errors.Password && <p>Password is required.</p>}<br/><br/>
//     </form>
//       <div className='legal-statement-body'>
//       <p className='legal-statement mt-1'>By providing my information, I agree to Fame Perfumery's <span className='text-decoration-underline' onClick={()=>{navigate('/')}}>Privacy Policy and <br/>Legal Statement</span></p>
//     </div>
//       <button onSubmit={handleSubmit(submitForm)} onClick={()=>{navigate('/Signin')}} className='signup-button border-0'>Create Account</button>
//     {/* <div className='legal-statement-body'>
//       <p className='legal-statement mt-5'>By providing my information, I agree to Fame Perfumery's <span className='text-decoration-underline' onClick={()=>{navigate('/')}}>Privacy Policy and Legal Statement</span></p>
//     </div> */}
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Signup
