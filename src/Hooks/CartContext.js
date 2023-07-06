import React,{useState,createContext,useEffect} from 'react'

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItem')) || [];
const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cartItem,setCartItem] = useState(cartItemsFromLocalStorage);
    // const [total,setTotal] = useState(0);
    let handleAddToCart = (product)=>{
        const item = cartItem.find((singleItem)=>singleItem._id === product._id);
        if(item){
            setCartItem(cartItem.map((oneItem)=>oneItem._id === product._id ? {...item,quantity:item.quantity + 1} : oneItem))
        } else{
            setCartItem([...cartItem, {...product,quantity:1}])
        }
    }
    // function for increase and decrease
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
    
    useEffect(()=>{
        localStorage.setItem('cartItem',JSON.stringify(cartItem))
    },[cartItem])
    return(
        <CartContext.Provider value={{cartItem,handleAddToCart,handleIncrease,handleDecrease}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext