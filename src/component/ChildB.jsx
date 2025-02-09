import React, { useContext } from 'react'
import ChildC from './ChildC'
import { store2 } from '../store'

const ChildB = () => {
  const data = useContext(store2)
  console.log(data,"check id B ");
  
  return (
    <div>
      <ChildC/>
    </div>
  )
}

export default ChildB
