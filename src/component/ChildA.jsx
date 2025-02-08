import React, { createContext, useEffect, useState } from 'react'
import ChildB from './ChildB'
import ChildC from './ChildC';
import ChildD from './ChildD';
import { dataStore,store2 } from '../store';

export let data1 = {
    name: 'vishal',
    age: 19,
    address: 'mumbai',
    hobbies: ['reading', 'dancing', 'painting']
}

const ChildA = () => {
    const [data,setData] =useState([]);
    useEffect(()=>{
        let datafetch = async()=>{
            let dataj = await fetch('https://dummyjson.com/products')
            let data = await dataj.json()
            setData(data)
        }
        datafetch()
    },[])
    return (
        <>
            <dataStore.Provider value={data}>
                <store2.Provider value={data1}>
                    <ChildB />
                </store2.Provider>
                <ChildD />
            </dataStore.Provider>
        </>
    )
}

export default ChildA
