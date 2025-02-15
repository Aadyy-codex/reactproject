import React, { useContext } from 'react'
import { store2 } from '../store'

const Cart = () => {

  let { cart, setCart } = useContext(store2);

  console.log(cart, "cart");
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }
  const IncQty = (newItem) => {
    const itemIndex = cart.findIndex(item => item.title === newItem.title);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].Selquantity += 1;
      setCart(updatedCart);
    }

  }
  const DecQty = (newItem, idx) => {
    const itemIndex = cart.findIndex(item => item.title === newItem.title);
    if (itemIndex !== -1) {
      // Product exists, so increase quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex].Selquantity -= 1;
      setCart(updatedCart);
    }
    if (newItem.Selquantity === 0) {
      removeFromCart(idx)
    }

  }
  const grandTotal = (cart) =>{
    let total = cart.reduce((acc,val)=>acc + val.Selquantity*val.price,0)
    return total.toFixed(2)
    
  }

  return (

    <div className='w-[90vw] ml-[70px] mb-3 mt-5'>
      {cart && cart.length > 0 ?
        cart.map((item, index) => (
          <div key={index} className='text-lg flex font-medium mb-2'>
            <div className='flex-1'>
              {item.title} - ${item.price} - x{item.Selquantity}
            </div>
            <div className='flex items-center'>
              <button onClick={() => DecQty(item, index)} className='px-2 py-1 bg-red-500 text-white rounded-l'>-</button>
              <span className='px-4'>{item.Selquantity}QTY</span>
              <button onClick={() => IncQty(item, index)} className='px-2 py-1 bg-green-500 text-white rounded-r'>+</button>
              <button onClick={() => removeFromCart(index)} className='ml-4 px-3 py-1 bg-yellow-500 text-black border border-black rounded'>Remove</button>
            </div>
          </div>
        ))
        :
        <h1 className='text-xl'>Cart is empty</h1>
      }
      {cart && cart.length > 0 && <h1 className='text-2xl font-semibold mt-4'>Grand total : ${grandTotal(cart)}</h1>}

      <button onClick={() => setCart([])} className='bg-gray-600 w-[10vw] h-[5vh] font-bold rounded-md border border-black text-xl text-white mt-4'>Clear all</button>
    </div>
  )
}

export default Cart
