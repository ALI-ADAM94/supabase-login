import React from 'react';
import  supabase  from '../../supbaseClient';
import {useNavigate} from 'react-router-dom';
import Chat from "./components/chat/Chat.jsx"
import List from "./components/list/List.jsx"
import Detail from './components/detail/Detail.jsx'
import Login from "./Login.jsx";
import Notification from './components/notification/Notification.jsx';

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
  const user =true;

  return (
    <div>{
    user !=signOut ? (  
        <>  
          <h1>Hello , you are logged in.</h1>
        <List/>
        <Chat/>
        <Detail/>
        </>
    ) : (

    <Login/>
    )}
     <Notification/>

        
      
          
  
    </div>
  )
}

export default Dashboard