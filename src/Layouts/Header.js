import React from 'react';
import landscapelogo from '../assets/Landscapelogo.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-white'>
        <div className='text-center'>
            <img src={landscapelogo} alt="" onClick={()=>{navigate('/')}} />
        </div>
    </div>
  )
}

export default Header