import React from 'react'

import { useNavigate } from 'react-router-dom';
import Login from './Login';
const Home =()=> {
  //const navigate = useNavigate();
    //    navigate(<Login/>)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md p-6 bg-white border border-gray-300 rounded-2xl shadow-lg">
    
        <Login/>

    </div>
    </div>
  )
}

export default Home