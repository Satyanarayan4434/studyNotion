import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Mainheader from "./pages/Mainheader";
import React, {useState} from 'react';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp"



function App() {
  const[isLogedIn, setIsLogedIn]=useState(false);
  return (
    <div>
      <Navbar isLogedIn={isLogedIn}/>
      <Routes>
        <Route path="/" element={<Mainheader/>}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/logIn" element={<LogIn/>}></Route>
          <Route path="/signUp" element={<SignUp/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
