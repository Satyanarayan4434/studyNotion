import React from 'react';
import logo from '../assets/Logo.svg'
import { NavLink } from 'react-router-dom';

function Navbar({isLogedIn}) {
  

  
  return (
    <div className='flex justify-around items-center py-3 bg-[#000814] font-sans '>
        <img src={logo} alt='logo'/>
        <div >
            <ul className='flex gap-8 text-white'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </div>
        <div className='flex gap-8 text-white'>
          {!isLogedIn&&<button className='bg-slate-800 p-2 rounded-md border border-blue-200'><NavLink to="/logIn">Log In</NavLink></button>}
          {!isLogedIn&&<button className='bg-slate-800 p-2 rounded-md border border-blue-200'>Sign Up</button>}
          {isLogedIn&&<button className='bg-slate-800 p-2 rounded-md border border-blue-200'>Log Out</button>}
          {isLogedIn&&<button className='bg-slate-800 p-2 rounded-md border border-blue-200'>Dashboard</button>}
        </div>
    </div>
  )
}

export default Navbar