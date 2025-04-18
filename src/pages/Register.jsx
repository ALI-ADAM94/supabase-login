import React,{useState} from 'react'
import  supabase  from '../../supbaseClient';
import { Link } from 'react-router-dom';
const Register =() =>{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const handleSubmit = async (ev)=>{
   ev.preventDefault();
   setMessage("");
   const {data, error}= await supabase.auth.signUp({
    email: email,
    password: password,
   });
   if(error){
    setMessage(error.message);
    return;
   }
   if(data){
    setMessage("User Account created!");
   }
   setEmail("");
   setPassword("");
  }
  return (
    <div>
    <h2>Register</h2><br/>
    {message && <span>{message}</span>}
    <form onSubmit={handleSubmit}>
       <input type="email" placeholder="Email" 
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       required/>
       <input type="password" placeholder="Password" 
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       required/>
       <button type="submit">Create Account</button>
    </form>
    <br/>
    <span>Already have an account?</span>
    <Link to="/login">Login</Link>
    </div>
  )
}

export default Register