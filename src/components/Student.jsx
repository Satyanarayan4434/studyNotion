import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Student(props) {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cnfpassword: "",
  });
  let changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
    console.log(formData);
  };
  const [data, setData] = useState([]);
  let formHandler = (event) => {
    event.preventDefault()
    setData([...data, formData]);
    if (formData.email !== "" && formData.password!=="") {
      props.setIsLogedIn(true);
      Navigate("/dashboard");
  }
  else{
      alert("Login Failed!")
  }  
  };
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
            name="fname"
            onChange={changeHandler}
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
            name="lname"
            onChange={changeHandler}
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
          name="email"
          onChange={changeHandler}
        />
      </label>
      <div className="flex gap-5">
        <label className="flex flex-col ">
          <div>
            Password<span className="text-red-400">*</span>
          </div>
          <input
            type="password"
            placeholder="Enter Password"
            className="rounded-md p-2 w-[15rem] text-black"
            name="password"
            onChange={changeHandler}
          />
        </label>
        <label className="flex flex-col">
          <div>
            Confirm Password<span className="text-red-400">*</span>
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="rounded-md p-2 w-[15rem] text-black"
            name="cnfpassword"
            onChange={changeHandler}
          />
          <a href="/logIn" className="text-blue-400">
            Forget Password?
          </a>
        </label>
      </div>
      <button
        onClick={formHandler}
        className="bg-yellow-50 h-[3rem] rounded-md w-[31.3rem] text-lg hover:shadow-md hover:shadow-blue-600"
      >
        Sign Up
      </button>
    </form>
  );
}

export default Student;
