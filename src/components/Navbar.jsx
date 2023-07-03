import React from 'react';
import logo from '../assets/Logo.svg'
import { NavLink } from 'react-router-dom';

function Navbar({isLogedIn, setIsLogedIn}) {
  

  
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
          {!isLogedIn&&<NavLink to="/logIn"><button className='bg-slate-800 p-2 rounded-md border border-blue-200'>Log In</button></NavLink>}
          {!isLogedIn&&<NavLink to="/signUp"><button className='bg-slate-800 p-2 rounded-md border border-blue-200'>Sign Up</button></NavLink>}
          {isLogedIn&&<NavLink to="/login" ><button onClick={()=>setIsLogedIn(false)} className='bg-slate-800 p-2 rounded-md border border-blue-200'>Log Out</button></NavLink>}
          {isLogedIn&&<NavLink to="/dashboard"><button className='bg-slate-800 p-2 rounded-md border border-blue-200'>Dashboard</button></NavLink>}
        </div>
    </div>
  )
}

export default Navbar