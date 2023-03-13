import React from "react";
import './Signup.css'
import { useState } from "react";
import { useContext } from "react";
import { FirebaseContext } from "./Context/FirebaseContext";
import { useNavigate } from "react-router-dom";


function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const{firebase}=useContext(FirebaseContext)
 

 
  const Nav =useNavigate()

  const handleLogin=(e)=>{
    e.preventDefault()
   firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
       Nav('/')
    }).catch((error)=> {
      alert(error.message)
    })
  }



  return (
    <section className="section">
    <div className="right-section">
        <h4>Please fill the form</h4>
      <form onSubmit={handleLogin}>
       
        <div className="input-group">
          <input name="email" type="email" id="email" required 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="">Email</label>
          <span>Invalid Email</span>
        </div>
        <div className="input-group">
          <input name="password" type="password" id="password" required 
          value={password}
           onChange={(e)=>setPassword(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <span>Password Was not matched</span>
        </div>
      
        <div className="submit-section">
         <button className="submit-button">Login</button>
        </div>
      </form>
      <div className="submit-section">
      <button onClick={()=>Nav('/signup')} className="submit-button1">Signup</button>

      </div>
    </div>
    </section>
  );
}

export default Login;
