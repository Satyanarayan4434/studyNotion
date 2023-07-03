import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Instractor(props) {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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
   
      
      <label className="flex flex-col">
        <div>
          Name<span className="text-red-400">*</span>
        </div>
        <input
          type="text"
          placeholder="Enter Last Name"
          className="rounded-md p-2 w-[31.1rem] text-black"
          name='name'
          onChange={changeHandler}
        />
      </label>
    
    <label className="flex flex-col">
      <div>
        Email<span className="text-red-400">*</span>
      </div>
      <input
        type="email"
        placeholder="Enter Email"
        className="rounded-md p-2 w-[31.3rem] text-black"
        name='email'
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
          name='password'
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
          name='cnfpassword'
          onChange={changeHandler}
        />
        <a href="/logIn" className="text-blue-400">
          Forget Password?
        </a>
      </label>
    </div>
    <button onClick={formHandler} className="bg-yellow-50 h-[3rem] rounded-md w-[31.3rem] text-lg hover:shadow-md hover:shadow-blue-600">
            Sign Up
          </button>
  </form>
  )
}

export default Instractor