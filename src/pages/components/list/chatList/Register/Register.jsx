import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const[avatar,setAvatar]=useState({ file:null, url:""});
   const handleAvatar = e =>{
    if(e.target.files[0]){
    setAvatar({
        file:e.target.files[0],
        url:URL.createObjectURL(e.target.files[0])
    });
    }
   }
  return (
    <div className="item">
    <h2>Create an account</h2>
        <form>
            <label htmlFor="file">
            <img src={avatar.url || "./avatar.png" } alt=""/>
            Upload an image
            </label>
            <input type="file"  id="file" style={{display:"none"}} onChange={handleAvatar}/>
            <input type="text"  placeholder="Username" name="username"/>
            <input type="text"  placeholder="Email" name="email"/>
            <input type="password"  placeholder="Password" name="password"/>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default Register