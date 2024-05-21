import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <header className='p-4 px-8 w-full absolute z-10 top-0 flex items-center justify-between pl-8'>
        <NavLink to='/' className='shadow-md p-3 rounded-lg bg-white font-bold'>Home</NavLink>
        <nav className='flex items-center gap-8'>
            <NavLink to='/about' className='font-bold'>About</NavLink>
            <NavLink to='/contact' className='font-bold'>Contact</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
