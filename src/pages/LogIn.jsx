import React from 'react';
import frame from '../assets/frame.png';
import login from '../assets/login.png';

function LogIn() {
  return (
    <div className='flex w-[880px] mx-auto'>
        <div>
            <h1>Welcome Back</h1>
            <p>Build skills for today, tomorrow, and beyond. <span>Education to future-proof your career.</span></p>
            <form className='flex flex-col'>
                <label>
                    Email Address<span>*</span>
                    <input
                        type='email'
                        placeholder='Enter email address'
                    />
                </label>
                <label>
                    Password<span>*</span>
                    <input
                        type='password'
                        placeholder='Enter Password'
                    />
                </label>
            </form>
        </div>
        <div>
            <img src={frame} alt='frame'/>
            <img src={login} alt='frame'/>
        </div>
    </div>
  )
}

export default LogIn