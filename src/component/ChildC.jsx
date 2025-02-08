import React, { useContext } from 'react'
import { dataStore } from './ChildA'

const ChildC = () => {
    let data=useContext(dataStore)
    console.log(data);
    
    
    
  return (
    <div>
     {data.name}<br/>{data.age}<br/>{data.address}<br/>{data.city}<br/>{data.hobbies.map((val,idx)=>(<div key={idx}>val:{val}</div>))}
    </div>
  )
}

export default ChildC
