import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import supabase from "../../supbaseClient";
//import { toast } from "react-toastify";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    


 const handleLogin = e =>{
      e.preventDefault()
    
 }
  return (
    <div className="login">
        <div className="item">
            <h2>Welcome back,</h2>
            <form onSubmit={handleLogin}>
                <input type="text"  placeholder="Email" name="email"/>
                <input type="password"  placeholder="Password" name="password"/>
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
       
    </div>
  )
}

export default Login