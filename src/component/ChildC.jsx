import React, { useContext } from 'react'
import { dataStore, store2 } from '../store';


const ChildC = () => {
    let {products}=useContext(dataStore)
    let {cart,setCart} = useContext(store2);
    console.log({setCart},cart);
    
    // console.log(products);
    let data =[]
    const addToCart = (newItem) => {
      const itemIndex = cart.findIndex(item => item.title === newItem.title);
      
      if (itemIndex !== -1) {
          const updatedCart = [...cart];
          updatedCart[itemIndex].Selquantity += 1;
          setCart(updatedCart);
      } else {
          setCart([...cart, { ...newItem, Selquantity: 1 }]);
      }
  };



    const addData = (data)=>{
      setCart((oldData)=>([...oldData,data]))
    }
    

    
    
    
    
  return (
    <div className ='w-[100%] flex flex-row flex-wrap'>
    {products && products?.map((product)=>(<><div><div className='w-[18.5vw] h-[55vh] border border-grey-600 ml-4 mb-5 rounded-sm bg-slate-50'>
    <img src={product.images[0]} className=' h-[300px]'></img>
    <button onClick={()=>addToCart(product)}>add to cart</button>
    </div>
    </div></>))}
    
    </div>
  )
}

export default ChildC
