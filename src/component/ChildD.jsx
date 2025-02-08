import React, { useContext } from 'react'
import { dataStore } from './ChildA'

const ChildD = () => {
     let dd= useContext(dataStore);
     console.log({dd},"child D");
     
  return (
    <div>
      ChildD
    </div>
  )
}

export default ChildD
