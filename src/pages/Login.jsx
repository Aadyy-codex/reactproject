import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'

const Login = () => {
    let {login}= useContext(AuthContext)
  return (
    <div><button onClick={login}>login</button></div>
  )
}

export default Login