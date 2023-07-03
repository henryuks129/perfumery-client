import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'
import searchicon from '../assets/searchimage.svg';
import { useNavigate } from 'react-router-dom';
import carticon from '../assets/carticon.svg';
import navimage from '../assets/navimage.svg';
import notificationicon from '../assets/notificationicon.svg';
import dropdownicon from '../assets/dropdownicon.svg';
import usericon from '../assets/usericon.svg';

const Navbar = () => {
    const navigate = useNavigate();
    const [dropdown, setDropDown] = useState(false);
    // useEffect(()=>{
    //     window.addEventListener('click', ()=>{
    //         if(dropdownicon){
    //             setDropDown(true);
    //         } else{
    //             setDropDown(false);
    //         }
    //     })
    // })
    const dropped = ()=>{
        setDropDown(!dropdown)
    }
    // const signin = ()=>{
    //     setDropDown(false);
    // }
    // const signup = ()=>{
    //     setDropDown(false);
    // }
  return (
    <div className='nav-body'>
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <img src={navimage} alt="" className='img-fluid' onClick={()=>{navigate('/')}}/>
                </div>
                <div className='nav-input-body'>
                    <input type="search" placeholder='search products, brands and categories' className='nav-input' />
                    <img src={searchicon} alt="" />
                    <button className='btn rounded-pill btn-danger'>search</button>
                </div>
                <div className='drop-body'>
                <div className='d-flex gap-5'>
                    <img src={carticon} alt="" onClick={()=>{navigate('/Cart')}}/>
                    <img src={notificationicon} alt="" />
                    <div className='d-flex'>
                    <img src={usericon} alt="" />
                    <img src={dropdownicon} className='nav-dropdown' alt="" onClick={dropped}/>
                    </div>
                    <div className='nav-dropdown-content'>
                    {dropdown && (
                        <div className='bg-danger '>
                            <button onClick={()=>{navigate('/Signin')}}>Sign In</button>
                            <button onClick={()=>{navigate('/Signup')}}>Sign Up</button>
                        </div>
                    )}
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar