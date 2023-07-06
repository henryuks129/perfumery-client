import React,{ useState,useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import ClipLoader from "react-spinners/ClipLoader";
import starticon from '../assets/staricon.svg';
import cart from '../assets/cart.svg';
import arrow from '../assets/Arrow.svg';
import '../styles/FemaleCategory.css';
import hearticon from '../assets/hearticon.svg';
import heartcircle from '../assets/heartcircle.svg';
import nairasign from '../assets/nairasign.svg';
import favouriteicon from '../assets/favouriteicon.svg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FemaleCategory = () => {
    const {data:data2,loading:loading2,error:error2} = useFetch('https://perfumery-server.onrender.com/stores/category/Female');
    const notify = () => {
        toast("An item has been added to cart", {
          position: toast.POSITION.TOP_CENTER,
        });
      };
  return (
    <div className='mt-5'>
        <div className='bg-white rounded combo-body w-100'>
                <div className='d-flex justify-content-between border-bottom border-2 p-4'>
                    <h4>Female</h4>
                    <div className='d-flex'>
                        <p>View more</p>
                        <img src={arrow} alt="" />
                    </div>
                </div>
                {loading2 && <ClipLoader color={'teal'} size={'300'}/>}
                    {error2 && <h2>{error2.message}</h2>}
                <div className='mapped-data-container shadow p-4'>
                {data2.map(
                    (datum)=>{
                        const {_id,title,description,category,price,label,image} = datum;
                        return(
                                <div key={_id} className='shadow border border-2 rounded'>
                                    <div className='relative'>
                                        <img src={image} alt="" className='w-100 img-fluid'/>
                                        <img src={favouriteicon} alt="" className='heart-icon'/>
                                    </div>
                                    <div>
                                    <h4>{title}</h4>
                                    <p>{label}</p>
                                    <div className='d-flex gap-2'>
                                        <img src={nairasign} alt="" />
                                        <h4>{price}</h4>
                                    </div>
                                    <div className='d-flex gap-5'>
                                        <img src={starticon} alt="" />
                                        <p>50 Reviews</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <button className='btn rounded-pill buy-btn'>Buy Now</button>
                                        <ToastContainer />
                                        <img src={cart} alt="" />
                                    </div>
                                    </div>
                                </div>
                        )
                    }
                )}
                </div>
            </div>
    </div>
  )
}

export default FemaleCategory