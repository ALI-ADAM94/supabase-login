import React from 'react'
import  supabase  from '../../supbaseClient';
import { Link,useNavigate} from 'react-router-dom';
const Login =()=>{
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
  
    const handleSubmit = async (ev)=>{
     ev.preventDefault();
     setMessage("");
     const {data, error}= await supabase.auth.signInWithPassword({
      email: email,
      password: password,
     });
     if(error){
      setMessage(error.message);
      setEmail("");
      setPassword("");
      return ;
     }
     if(data){
      
      navigate("/dashboard");
      return null;
     }
    };
  return (
  <div>
   <h2>Login</h2><br/>
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
        <button type="submit">Log in</button>
     </form>
     <br/>
     <span>Don't have an account?</span>
     <Link to="/register">Register</Link>
 </div>
  )
}

export default Login