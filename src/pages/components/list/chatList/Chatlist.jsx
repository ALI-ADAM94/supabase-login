import { useEffect, useState } from 'react' ;
import './chatList.css';
import AddUser from './addUser/addUser';
import supabase from '../../../../../supbaseClient';

const Chatlist = () => {
   const [addMode, setAddMode] = useState(false);
   const [chatUsers, setChatUsers] = useState([]);
   const [currentUserId, setCurrentUserId] = useState(null);
 
   useEffect(() => {
     const fetchChatUsers = async () => {
       // Step 1: Get current user
       const { data: { user }, error: authError } = await supabase.auth.getUser();
       if (authError) {
         console.error('Auth error:', authError);
         return;
       }
 
       setCurrentUserId(user.id);
 
       // Step 2: Call the SQL function
       const { data, error } = await supabase.rpc('get_last_message_with_count');
       if (error) {
         console.error('RPC fetch error:', error);
         return;
       }
 
       // Step 3: Filter out current user
       const others = data.filter(u => u.user_id !== user.id);
       setChatUsers(others);
     };
 
     fetchChatUsers();
   }, []);
 
   return (
     <div className='chatList'>
       <div className='search'>
         <div className='searchBar'>
           <img src='./search.png' alt='' />
           <input type='text' placeholder='Search' />
         </div>
         <img
           src={addMode ? './minus.png' : './plus.png'}
           alt=''
           className='add'
           onClick={() => setAddMode(prev => !prev)}
         />
       </div>
 
       <div className='h-80 overflow-y-auto p-4'>
         {chatUsers.map(user => (
           <div className='item' key={user.user_id}>
             <img src='./avatar.png' alt='' />
             <div className='texts'>
               <span>{user.username} 
               <small class="inline-block bg-blue-500 text-white rounded-full w-8 h-8 mr-0  text-center  items-center justify-center float-right">{user.message_count}</small>
               </span>
           
              
               <p>{user.message}</p>
                 
             </div>
            
           </div>
         ))}
         {addMode &&<AddUser/>}
       </div>
     </div>

   
  
   );
 };
 
  


export default Chatlist