import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-900 text-white text-xl w-[100vw] h-[8vh] font-semibold pt-5 pl-12 sticky top-0'>
     <Link className='ml-5 ' to='/'>Home</Link>
     <Link className='ml-20' to='/contact'>Contact</Link>
     <Link className='ml-20' to='/products'>Product</Link>
     <Link className='ml-20 text-red-500' to='/logout'>Don't Click</Link>
    </div>
  )
}

export default Navbar