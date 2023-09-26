import React,{useState,createContext,useEffect} from 'react';
import axios from 'axios';

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItem')) || [];
const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [loggedIn,setLoggedIn] = useState(undefined)
    const token = localStorage.getItem('token')
    async function getLoggedIn(){
        const loggedInRes = await axios.get('https://perfumery-server.onrender.com/auth/loggedIn',{
            headers: {
                'Authorization': token
            }
        })
        setLoggedIn(loggedInRes.data)
        console.log(loggedInRes.data);
    }

    const logout = ()=>{
        localStorage.removeItem('token')
        setLoggedIn(false)
    }

    const [cartItem,setCartItem] = useState(cartItemsFromLocalStorage);
    useEffect(()=>{
        localStorage.setItem("cartItem",JSON.stringify(cartItem));
        getLoggedIn()
    },[cartItem])
    // const [total,setTotal] = useState(0);
    let handleAddToCart = (product)=>{
        const item = cartItem.find((singleItem)=>singleItem._id === product._id);
        if(item){
            setCartItem(cartItem.map((oneItem)=>oneItem._id === product._id ? {...item,quantity:item.quantity + 1} : oneItem))
        } else{
            setCartItem([...cartItem, {...product,quantity:1}])
        }
    }
    // function for increase and decrease and remove
    function handleIncrease(product){
        const item = cartItem.find((singleItem)=>singleItem._id === product._id)
        if(item){
            setCartItem(cartItem.map((oneItem)=>oneItem._id === product._id ? {...item, quantity:item.quantity + 1} : oneItem))
        }
    }
    function handleDecrease(product){
        const item = cartItem.find((singleItem)=>singleItem._id === product._id);
        if(item.quantity === 1){
            setCartItem(cartItem.filter((oneItem)=>oneItem._id !== product._id))
        } else{
            setCartItem(cartItem.map((items)=>items._id === product._id ? {...item,quantity:item.quantity - 1} : items))
        }
    }
    function handleRemove(product){
        setCartItem(cartItem.filter((oneItem)=>oneItem._id !== product._id))
    }
    
    useEffect(()=>{
        localStorage.setItem('cartItem',JSON.stringify(cartItem))
    },[cartItem])
    return(
        <CartContext.Provider value={{cartItem,handleAddToCart,handleIncrease,handleDecrease,handleRemove,loggedIn,getLoggedIn,logout, setLoggedIn}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext