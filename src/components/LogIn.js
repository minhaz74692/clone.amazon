import React, { useState } from 'react'; 
import { Link, useNavigate} from 'react-router-dom';
import AmazonLogo from "../images/AmazonLogo.png";

import {db,auth} from './firebase';

const LogIn = () => {
  const nevigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e=>{
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then( (auth)=>{
      console.log(auth);
      if (auth){
        nevigate('/')
      }
    })
    .catch(error => alert(error.message))

    //Firbase staffs.......
  }
  const register = e=>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then( (auth)=>{
      console.log(auth);
      if (auth){
        nevigate('/')
      }
    })
    .catch(error => alert(error.message))

    
    //Firbase staffs.......

  }
  return (
    <div className='flex flex-col bg-white items-center h-[100vh] mx-auto'>
      <Link to="/">
      <img className='my-[20px] object-contain w-[100px] mx-auto' src={AmazonLogo}  alt="amazonLogo"/>
      </Link>
      <div className='w-[300px] h-[fit-content] flex flex-col rounded-[5px] border border-[1px] border-[lightgray] p-[20px]'>
      <form className='flex flex-col'>
        <h1 className='font-[500] text-[32px] mb-[20px]'>Sign-in</h1>
        <label className='text-[0.83rem] font-[500] mb-[5px]'>Email or Username:</label>
        <input type="email" className='h-[30px] p-1 border-[1px] rounded mb-[10px] bg-white w-[98%]' name='email' value={email} onChange={e=> setEmail(e.target.value)}/>

        <label className='text-[0.83rem] font-[500] mb-[5px]'>Password:</label>
        <input type="password" className='h-[30px] p-1 border-[1px] rounded mb-[10px] bg-white w-[98%]' name='password' value={password} onChange={e=> setPassword(e.target.value)}/>
        <button className='bg-[#f0c14b] rounded-[2px] w-full h-[30px] border border-[1px] mt-[10px] border-x-[#a88734] border-y-[#9c7e31] font-semibold' onClick={signIn} type="submit">Sign in</button>
      </form>
      <p className='mt-[15px] text-[12px]'>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
      <button className='rounded-[2px] w-full h-[30px] border-[1px] border-[darkgray] bg-slate-200 font-semibold mt-[10px]' onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default LogIn
