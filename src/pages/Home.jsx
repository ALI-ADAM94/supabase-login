import React from 'react';
import Login from './Login';
import './Home.css';
import '../App.css';
const Home =()=> {
 
  return (
    <div className='home'>
   <div className="flex items-center justify-center min-h-screen p-[5px]">
  <Login/>
</div>
    </div>

  )
}

export default Home