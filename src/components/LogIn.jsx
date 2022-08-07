import { useState } from "react"
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Home from "./Home";

const LogIn = () => {
    const [email,setEmail]=new useState("");
    const [password,setPassword]=new useState("");
    const [data,setData]=new useState([]);
    const navigate=useNavigate();
    function submitForm(e){
        e.preventDefault();
        // console.log(email,password);
        let value=localStorage.getItem(email);
        if(value==null){
            alert('This user does not exist')
            navigate('/')
        }
        else{
            let x=localStorage.getItem(email);
            if(x==password){
                navigate('/Home')   
            }
            else{
            alert('plz enter valid email and password')

            }
        }

    }
  return (
<div className=' my-5 login-signup' style={{width:'40%'}}>
        <h3 className='my-3 headingSignUpLogIn'>Log In </h3>
      <form onSubmit={submitForm} className="my-4">
  <div className="form-group">

    <label htmlFor="email"><h6>Email address</h6></label>
    <input type="email" name='email' onChange={(e)=>{setEmail(e.target.value)}} id="email" value={email} aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="password"><h6>Password</h6></label>
    <input type="password" name='password' onChange={(e)=>{setPassword(e.target.value)}} id="password" value={password} placeholder="Password"/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default LogIn
