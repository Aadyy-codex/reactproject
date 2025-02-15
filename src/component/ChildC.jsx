import React, { useContext } from 'react'
import { dataStore, store2 } from '../store';


const ChildC = () => {
    let {products}=useContext(dataStore)
    let {setCart} = useContext(store2);
    console.log({setCart});
    
    console.log(products);
    let data =[]
    const addData = (data)=>{
      setCart((oldData)=>([...oldData,data]))
    }
    

    
    
    
    
  return (
    <div className ='w-[100%] flex flex-row flex-wrap'>
    {products && products?.map((product)=>(<><div><div className='w-[18.5vw] h-[55vh] border border-grey-600 ml-4 mb-5 rounded-sm bg-slate-50'>
    <img src={product.images[0]} className=' h-[300px]'></img>
    <h1 className='text-center font-bold'>{product?.title}</h1><h1 className='text-center '>${product.price}</h1>
    <div className='flex justify-center'>
    <button onClick={()=>addData(product)} className='border border-black rounded-sm w-[10vw] '>add to cart</button>
    </div>
    </div>
    </div></>))}
    
    </div>
  )
}

export default ChildC
