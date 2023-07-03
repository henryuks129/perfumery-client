import React,{useState,useEffect} from 'react';
import yslimage from '../assets/yslimage.svg';
import cartnaira from '../assets/cartnaira.svg';
import '../styles/Cart.css';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';

const Cart = () => {
    const [addToCart, setAddToCart] = useState();
    let increase = ()=>{
        setAddToCart(addToCart + 1 )
    }
    let decrease = ()=>{
        setAddToCart(addToCart - 1)
    }
  return (
    <div>
        <Navbar/>
        <div className='container'>
        <div>
            <h2>My Cart</h2>
            <p>Welcome back!</p>
        </div>
        <div className='d-flex justify-content-between'>
        <div className=' border border-1 rounded w-75'>
            <div className=' '>
                <div className=' border border-2 border-bottom'>
                    <div>
                        <div className='d-flex justify-content-between border-bottom'>
                        <h4>Product</h4>
                        <h4>Quantity</h4>
                        <h4>Total</h4>
                        </div>
                        <div className=''>
                            <div className='d-flex justify-content-between border-bottom'>
                            <div className='d-flex align-items-center'>
                            <img src={yslimage} alt="" className='img-fluid'/>
                            <p>YSL Libre Intense EDP - 90ML</p>
                            </div>
                            <div className='text-center'>
                                <div className='border border-1 border-dark cart-button'>
                                <button className='border-0' onClick={decrease}>-</button>
                                <button className='border-0' onClick={addToCart}>1</button>
                                <button className='border-0' onClick={increase}>+</button>
                                </div>
                                <p>Remove</p>
                            </div>
                            <div className='d-flex'>
                                <img src={cartnaira} alt="" className='w-100 img-fluid'/>
                                <h5>24000</h5>
                            </div>
                            </div>
                            <div className='d-flex justify-content-between border-bottom'>
                            <div className='d-flex align-items-center'>
                            <img src={yslimage} alt="" className='img-fluid'/>
                            <p>YSL Libre Intense EDP - 90ML</p>
                            </div>
                            <div className='text-center'>
                                <div className='border border-1 border-dark'>
                                <button className='border-0' onClick={decrease}>-</button>
                                <button className='border-0' onClick={addToCart}>1</button>
                                <button className='border-0' onClick={increase}>+</button>
                                </div>
                                <p>Remove</p>
                            </div>
                            <div className='d-flex'>
                                <img src={cartnaira} alt="" className='w-100 img-fluid'/>
                                <h5>24000</h5>
                            </div>
                            </div>
                            <div className='d-flex justify-content-between border-bottom'>
                            <div className='d-flex align-items-center'>
                            <img src={yslimage} alt="" className='img-fluid'/>
                            <p>YSL Libre Intense EDP - 90ML</p>
                            </div>
                            <div className='text-center'>
                                <div className='border border-1 border-dark'>
                                <button className='border-0' onClick={decrease}>-</button>
                                <button className='border-0' onClick={addToCart}>1</button>
                                <button className='border-0' onClick={increase}>+</button>
                                </div>
                                <p>Remove</p>
                            </div>
                            <div className='d-flex'>
                                <img src={cartnaira} alt="" className='w-100 img-fluid'/>
                                <h5>24000</h5>
                            </div>
                            </div>
                            <div className='d-flex justify-content-between border-bottom'>
                            <div className='d-flex align-items-center'>
                            <img src={yslimage} alt="" className='img-fluid'/>
                            <p>YSL Libre Intense EDP - 90ML</p>
                            </div>
                            <div className='text-center'>
                                <div className='border border-1 border-dark'>
                                <button className='border-0' onClick={decrease}>-</button>
                                <button className='border-0' onClick={addToCart}>1</button>
                                <button className='border-0' onClick={increase}>+</button>
                                </div>
                                <p>Remove</p>
                            </div>
                            <div className='d-flex'>
                                <img src={cartnaira} alt="" className='w-100 img-fluid'/>
                                <h5>24000</h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='border border-1 '>
            <div className='container'>
                <div className='d-flex'>
                    <h4>Total</h4>
                    <div className='d-flex'>
                        <img src={cartnaira} alt="" />
                        <h5>24000</h5>
                    </div>
                </div>
                <div className='d-flex'>
                    <p>Orders Instructions</p>
                    <img src="" alt="" />
                </div>
                <p>VAT and <span>shipping</span> calculated at checkout</p>
                <div>
                    <button>Check Out</button>
                </div>
            </div>
        </div>
        </div>
        
    </div>
        <Footer/>
    </div>
  )
}

export default Cart