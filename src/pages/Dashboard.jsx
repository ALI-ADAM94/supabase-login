import React from 'react';
import  supabase  from '../../supbaseClient';
import {useNavigate} from 'react-router-dom';
import Chat from "./components/chat/Chat.jsx"
import List from "./components/list/List.jsx"
import Detail from './components/detail/Detail.jsx'
import Login from "./Login.jsx";
import Notification from './components/notification/Notification.jsx';
import '../App.css';
const Dashboard =()=> {
    const navigate = useNavigate();
  const signOut = async ()=>{
       const {error}= await supabase.auth.signOut();
       if(error) throw error;

         navigate(<List/>);
        navigate(<Chat/>);
        navigate(<Detail/>);
        <button onClick={signOut}>Sign out</button>
        navigate(<Notification/>)
 
  }
  const user =false;

  return (
    <div>{
    user !=signOut ? (  
        <>  
          <h1>Hello , you are logged in.</h1>
          <div className="flex h-screen">
  <div className="flex-1 border-r border-gray-300">
    <List />
  </div>
  <div className="flex-1 border-r border-gray-300">
    <Chat />
  </div>
  <div className="flex-1">
    <Detail />
  </div>
</div>

      
        </>
    ) : (

    <Login/>
    )}
     <Notification/>

        
      
          
  
    </div>
  )
}

export default Dashboard