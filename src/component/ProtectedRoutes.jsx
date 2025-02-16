import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    let {isAuth} = useContext(AuthContext)
    console.log(isAuth,"fkdncskcndknskd");
    
  return (
    isAuth ? children:<Navigate to='/login'/>
  )
}

export default ProtectedRoutes