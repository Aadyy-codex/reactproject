import React, { useContext } from 'react'
import { store2 } from '../store'

const Cart = () => {

    let {cart,setCart}= useContext(store2);
    
    console.log(cart,"cart");
    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i!== index))
    }
    const IncQty = (newItem) =>{
      const itemIndex = cart.findIndex(item => item.title === newItem.title);
      if (itemIndex !== -1) {
        // Product exists, so increase quantity
        const updatedCart = [...cart];
        updatedCart[itemIndex].Selquantity += 1;
        setCart(updatedCart);
    } 

    }
    const DecQty = (newItem,idx)=>{
      const itemIndex = cart.findIndex(item => item.title === newItem.title);
      if (itemIndex !== -1) {
        // Product exists, so increase quantity
        const updatedCart = [...cart];
        updatedCart[itemIndex].Selquantity -= 1;
        setCart(updatedCart);
    } 
    if(newItem.Selquantity === 0){
      removeFromCart(idx)
    }

    }
    const grandTotal = (cart) =>{
      let total = cart.reduce((acc,val)=>acc+val.Selquantity*val.price,0)
      return total.toFixed(2);
    }
    
  return (

    <div className='w-[90vw]  ml-[70px] mb-3 mt-5'>
      {cart && cart.length > 0 ?
        cart.map((item, index) => (
          <div key={index}>
            {item.title} - {item.price} - {item.Selquantity}QTY - {item.Selquantity * item.price}total
            <button onClick={()=>IncQty(item,index)}>+</button>
            {item.Selquantity}QTY 
            <button onClick={()=>DecQty(item,index)}>-</button>
            <button onClick={() => removeFromCart(index)}>Remove</button>

          </div>
        )) 
      :
      <h1 className='text-xl'>cart is empty</h1>
      }
      <div>
      <h1 className='text-xl'>Total Price: {grandTotal(cart)} </h1>
      <button onClick={()=>setCart([])} className= 'bg-gray-900 w-[10vw] h-[5vh] mt-5 text-xl font-bold rounded-md border border-black text-white'>clear all </button>
      </div>
    </div>
  )
}

export default Cart
