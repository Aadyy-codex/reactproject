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
    <div className =' flex flex-row flex-wrap'>
    {products && products?.map((product)=>(<><div><div className='w-[20vw] border border-indigo-600'>{product?.title}{product.price}
    <h1>{product.id}</h1>
    <img src={product.images[0]} className=' h-[300px]'></img>
    <button onClick={()=>addData(product)}>add to cart</button>
    </div>
    </div></>))}
    
    </div>
  )
}

export default ChildC
