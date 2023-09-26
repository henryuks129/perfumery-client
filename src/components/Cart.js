import React,{useState,useEffect,useContext} from 'react';
import yslimage from '../assets/yslimage.svg';
import cartnaira from '../assets/cartnaira.svg';
import '../styles/Cart.css';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import CartContext from '../Hooks/CartContext';

const Cart = () => {
    const {cartItem,handleIncrease,handleDecrease,handleRemove,quantity} = useContext(CartContext);
    const [addToCart, setAddToCart] = useState();
    let increase = ()=>{
        setAddToCart(addToCart + 1)
    }
    let decrease = ()=>{
        setAddToCart(addToCart - 1)
    }
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className='cart text-center'>
                {cartItem.length === 0 && (
                    <div>
                        <h3>Cart is empty</h3>
                    </div>
                )}
            </div>
            <div>
                <div className='d-flex justify-content-between'>
                    <div className='mapped-body'>
                    {cartItem.length >= 1 && (
                        <div className='d-flex justify-content-between'>
                        <h4>Product</h4>
                        <h4>Quantity</h4>
                        <h4>Total</h4>
                        </div>
                    )}
                    {cartItem.map((singleItems)=>{
                        const {_id,image,title,price,quantity} = singleItems
                        return(
                            <div key={_id} className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img src={image} alt=""  className='cart-mapped-image'/>
                                    <h5><strong>{title}</strong></h5>
                                </div>
                                <div className='align-items-center'>
                                    <button onClick={()=>{handleDecrease(singleItems)}}>-</button>
                                    <button>{quantity}</button>
                                    <button onClick={()=>{handleIncrease(singleItems)}}>+</button>
                                    <p className='text-center remove-text' onClick={()=>{handleRemove(singleItems)}}>Remove</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <img src={cartnaira} alt="" />
                                    <h5>{price}</h5>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart