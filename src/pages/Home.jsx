import React from 'react'
import  {Link}  from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Login from './Login';
const Home =()=> {
  const navigate = useNavigate();
        navigate(<Login/>)
  return (
    <div>
     
        <Login/>

    </div>
  )
}

export default Home