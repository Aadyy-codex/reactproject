import React, { createContext } from 'react'
import ChildB from './ChildB'
import ChildC from './ChildC';
import ChildD from './ChildD';

let data = {
    name:'aditya',
    age: 20,
    address: 'delhi',
    hobbies: ['reading', 'coding', 'painting']
}
export let dataStore = createContext();

const ChildA = () => {
  return (
    <>
    <dataStore.Provider value={data}>
    <div>
      <ChildB />
    </div>
    <ChildD/>
    
    </dataStore.Provider>
    
    </>
  )
}

export default ChildA
