import React, { useContext } from 'react'
import { dataStore, store2 } from '../store';


const ChildD = () => {
     let dd= useContext(dataStore);
     let storedata= useContext(store2);
     console.log({dd},"child D",{storedata});
     
  return (
    <div>
      ChildD
    </div>
  )
}

export default ChildD
