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
                  navigate(<Login/>)
         }
 

    </div>
  )
}

export default Home