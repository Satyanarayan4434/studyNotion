import React from 'react'

function Student() {
  return (
    <form className="flex flex-col mt-6 gap-4">
    <div className="flex gap-5">
      <label className="flex flex-col ">
        <div>
          First Name<span className="text-red-400">*</span>
        </div>
        <input
          type="text"
          placeholder="Enter First Name"
          className="rounded-md p-2 w-[15rem] text-black"
        />
      </label>
      <label className="flex flex-col">
        <div>
          Last Name<span className="text-red-400">*</span>
        </div>
        <input
          type="text"
          placeholder="Enter Last Name"
          className="rounded-md p-2 w-[15rem] text-black"
        />
      </label>
    </div>
    <label className="flex flex-col">
      <div>
        Email<span className="text-red-400">*</span>
      </div>
      <input
        type="email"
        placeholder="Enter Email"
        className="rounded-md p-2 w-[31.3rem] text-black"
      />
    </label>
    <div className="flex gap-5">
      <label className="flex flex-col ">
        <div>
          Password<span className="text-red-400">*</span>
        </div>
        <input
          type="password"
          placeholder="Enter First Name"
          className="rounded-md p-2 w-[15rem] text-black"
        />
      </label>
      <label className="flex flex-col">
        <div>
          Confirm Password<span className="text-red-400">*</span>
        </div>
        <input
          type="password"
          placeholder="Enter Last Name"
          className="rounded-md p-2 w-[15rem] text-black"
        />
        <a href="/logIn" className="text-blue-400">
          Forget Password?
        </a>
      </label>
    </div>
  </form>
  )
}

export default Student