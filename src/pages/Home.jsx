import React from 'react'
import  {Link}  from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Home =()=> {
  const navigate = useNavigate();
  return (
    <div>
         <br/>
         <br/>
         {
                  navigate("/login")
         }
 

    </div>
  )
}

export default Home