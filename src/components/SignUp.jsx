import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [email,setEmail]=new useState("");
    const [password,setPassword]=new useState("");
    const [data,setData]=new useState([]);
    const navigate=useNavigate();
    function submitForm(e){
        e.preventDefault();
        console.log(email,password);
        let emailValueExist=localStorage.getItem(email);
        if(!emailValueExist){
          localStorage.setItem(email,password);
          
          console.log('object');
          
          if(email && password){
              setData({email:email,password:password})
              setEmail('');
              setPassword('');
          }
          else{
              alert('plz fill the email and password ');
          }
      }
      else{
      
      
      window.alert('user already exist')
        
      }
      navigate('/LogIn');
        
    }
  return (
    <div className=' my-5 login-signup' style={{width:'40%'}}>
        <h3 className='my-3 headingSignUpLogIn'>Sign Up </h3>
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

export default SignUp
