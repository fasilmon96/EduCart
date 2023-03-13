import React, { useContext } from "react";
import "./Header.css";
import { AuthContext } from "./Context/FirebaseContext";
import { FirebaseContext } from "./Context/FirebaseContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



function Header() {
  
  
  
  const{user}= useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)
  const Nav= useNavigate()
  const {cartTotalQuantity}=useSelector(state=>state.cart)

  return (
    <header>
      <div className="container">
        <h1>EduCart</h1>

        <ol>
           <li onClick={()=>
            Nav('/')}><a >Home</a></li>
           <li onClick={()=>Nav('/prodec')}><a >Product</a></li>
           <li onClick={()=>{
            user ? Nav('') : Nav('/login')
           }}><a>{user ?  user.displayName : 'Login'}</a></li>
         { user && <li onClick={()=>{
          firebase.auth().signOut() ; Nav('./login')
         }}><a >Logout</a></li>}
        </ol>
      
        <i   class="fa fa-shopping-cart  " aria-hidden="true">  <button>{cartTotalQuantity}</button></i>
      </div>
    </header>
  );
}

export default Header;
