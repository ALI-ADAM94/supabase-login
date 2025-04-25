import React from 'react'

import { useNavigate } from 'react-router-dom';
import Login from './Login';
const Home =()=> {
  const navigate = useNavigate();
 
  return (
    <div className="flex items-center justify-center min-h-screen">

    navigate(<Login/>)
      

  
    </div>
  )
}

export default Home