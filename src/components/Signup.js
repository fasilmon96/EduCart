import React, { useContext} from "react";
import './Signup.css'
 import { useState } from "react";
 import { FirebaseContext } from "./Context/FirebaseContext";
 import { useNavigate } from "react-router-dom";
function Signup() {

  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[phone,setPhone]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const Nav= useNavigate()
  const handleSubmit=(e)=>{

  
    e.preventDefault()

      firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
        result.user.updateProfile({displayName:username}).then(()=>{
          firebase.firestore().collection('users').add({
            id:result.user.uid,
            username:username,
            phone:phone
          }).then(()=>{
             Nav('/login')
          })
        })
      })
    }

  

  return (
    <section className="section">
    <div className="right-section">
        <h4>Please fill the form</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input name="username" id="fname"
          value={username}
          onChange={(e)=> setUsername(e.target.value)} 
          type="text"  required
          pattern="^[A-Za-z0-9].{2,16}" />
          <label>Name</label>
        
          <span>Name should have 3-16 characters</span>
        </div>
        <div className="input-group">
          <input name="email" id="fmail"
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          type="email"  required />
          <label >Email</label>
          <span>Enter a valid Email ID</span>
        </div>
        <div className="input-group">
          <input  name="password"  
           value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            type="password"  required  id="password"
          pattern="^[A-Za-z0-9].{5,15}"/>
          <label>Password</label>
          <span>Password must have minimum 6 & maximum 16 digits</span>
        </div>
        <div className="input-group">
          <input name="phone" 
          value={phone} id="phone"
          onChange={(e)=>setPhone(e.target.value)} type="text"   required
          pattern="^[0-9].{5,14}"/>
          <label>Phone</label>
          <span>Enter the number min 6 & max 15 digits </span>
        </div>
        <div className="submit-section">
         <button className="submit-button">Signup</button>
        </div>
      </form>
      <div className="submit-section">
      <button onClick={()=>Nav('/login')} className="submit-button1">Login</button>

      </div>
    </div>
    </section>
  );
}

export default Signup;
