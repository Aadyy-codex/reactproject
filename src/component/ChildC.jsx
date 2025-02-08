import React, { useContext } from 'react'
import { dataStore, store2 } from '../store';


const ChildC = () => {
    let {products}=useContext(dataStore)
    console.log(products);
    let data =[]
    

    
    
    
    
  return (
    <div>
    {products && products?.map((product)=>(<>{product?.title}{product.price}</>))}
    
    </div>
  )
}

export default ChildC
