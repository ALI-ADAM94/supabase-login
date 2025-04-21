import React from 'react';
import  supabase  from '../../supbaseClient';
import {useNavigate} from 'react-router-dom';
import Chat from "./components/chat/Chat"
import List from "./components/list/List"
import Detail from './components/detail/Detail.jsx'
import Login from "./components/login/Login";
import Notification from './components/notification/Notification.jsx';

const Dashboard =()=> {
    const navigate = useNavigate();
  const signOut = async ()=>{
       const {error}= await supabase.auth.signOut();
       if(error) throw error;
       navigate("/login");
  }

  return (
    <div>
    <h1>Hello , you are logged in.</h1>
    {
      signOut ==false ? (  
        <>
        <List/>
        <Chat/>
        <Detail/>
        <button onClick={signOut}>Sign out</button>
        <Notification/>
        </>
    ) : (

    <Login/>
    )}
 


    </div>
  )
}

export default Dashboard