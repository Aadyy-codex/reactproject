import React, { useContext } from 'react'
import { dataStore, store2 } from '../store';
import { AuthContext } from '../AuthContext';


const ChildC = () => {
    let {products}=useContext(dataStore)
    let {cart,setCart} = useContext(store2);
     let {logout} =useContext(AuthContext)
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
    {products && products?.map((product)=>(<><div><div className='w-[18.5vw] h-[57vh] border border-grey-600 ml-4 mb-5 rounded-sm bg-slate-50'>
    <img src={product.images[0]} className=' h-[300px]'></img>
    <h1 className='text-center font-bold text-xl'>{product.title}</h1>
    <h1 className='text-center text-xl'>${product.price}</h1>
        <div className='flex justify-center'>
    <button onClick={()=>addToCart(product)} className='border border-gray-700 text-white bg-gray-700 w-[9vw] rounded-sm
    '>add to cart</button>
        </div>
    </div>
    </div></>))}
    <button onClick={logout} >logout</button>
    
    </div>
  )
}

export default ChildC
