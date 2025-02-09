import React, { useContext } from 'react'
import { store2 } from '../store'

const Cart = () => {

    let {cart,setCart}= useContext(store2);
    console.log(cart,"cart");
    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i!== index))
    }
    
  return (
    
    <div>
      {cart && cart.length > 0 ?
        cart.map((item, index) => (
          <div key={index}>
            {item.name} - {item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        )) 
      :
      <h1>cart is empty</h1>
      }

      <button onClick={()=>setCart([])}>clear all </button>
    </div>
  )
}

export default Cart
