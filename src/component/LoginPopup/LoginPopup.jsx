import React,{useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setshowLogin}) => {
  
  const [currState,setcurrState]=useState("Login");


  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
         <div className="login-popup-title">
               <h2>{currState}</h2>
               <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} />
         </div>
         <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
           <input type="text" placeholder='Your email' required/>
           <input type="password" placeholder='Password' required/>
         </div>
         <button>{currState==="Sign Up"?"Create Account": "Login"}</button>
         <div className="login-popup-condition">
          <input type="checkbox"  required/>
          <p>TO continue ,Accept the terms and condition</p>
         </div>
         { currState==="Login"? 
         <p>Create a new account ! <span onClick={()=>setcurrState("Sign Up")}> Click here</span></p>
         :<p>Alraedy have a Account <span onClick={()=>setcurrState("Login")}> Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
