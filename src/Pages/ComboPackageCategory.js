import React,{ useState,useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import ClipLoader from "react-spinners/ClipLoader";
import starticon from '../assets/staricon.svg';
import cart from '../assets/cart.svg';
import arrow from '../assets/Arrow.svg';
import '../styles/ComboPackageCategory.css';
import hearticon from '../assets/hearticon.svg';
import heartcircle from '../assets/heartcircle.svg';
import nairasign from '../assets/nairasign.svg';
import favouriteicon from '../assets/favouriteicon.svg';

const ComboPackageCategory = () => {
    const {data:data3,loading:loading3,error:error3} = useFetch('https://perfumery-server.onrender.com/stores/category/Combo%20Packages');
  return (
    <div className='mt-5'>
        {/* <div> */}
            <div className='bg-white rounded combo-body'>
                <div className='d-flex justify-content-between border-bottom border-2 p-4'>
                    <h4>Combo Packages</h4>
                    <div className='d-flex'>
                        <p>View more</p>
                        <img src={arrow} alt="" />
                    </div>
                </div>
                {loading3 && <ClipLoader color={'teal'} size={'300'}/>}
                    {error3 && <h2>{error3.message}</h2>}
                <div className='mapped-data-container shadow p-4'>
                {data3.map((datum)=>{
                    const {_id,title,description,category,price,label,image} = datum;
                    return(
                            <div key={_id} className='shadow border border-2 rounded'>
                                <div className='relative'>
                                    <img src={image} alt="" className='w-100'/>
                                    <img src={favouriteicon} alt="" className='heart-icon'/>
                                </div>
                                <div className='p-3'>
                                <h4>{title}</h4>
                                <p>{label}</p>
                                <div className='d-flex gap-2'>
                                    <img src={nairasign} alt="" />
                                    <h5 className='pt-1'>{price}</h5>
                                </div>
                                <div className='d-flex gap-5'>
                                    <img src={starticon} alt="" />
                                    <p className='pt-3'>50 Reviews</p>
                                </div>
                                <div className='d-flex justify-content-between mb-2'>
                                    <button className='rounded-pill'>Buy Now</button>
                                    <img src={cart} alt="" />
                                </div>
                                </div>
                            </div>
                    )
                })}
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default ComboPackageCategory