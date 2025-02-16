import React from 'react'
import CompB from './CompB'

// props

const CompA = () => {
    let data = [{id:1, name: 'Aditya'}, {id:2, name: 'Aryan'}, {id:3, name: 'Bhav'}, {id:4, name: 'Bob'}]
  return (
    <div><CompB data={data}/></div>
  )
}

export default CompA