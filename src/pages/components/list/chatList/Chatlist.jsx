import { useEffect, useState } from 'react' ;
import './chatList.css';
import AddUser from './addUser/addUser';
import supabase from '../../../../../supbaseClient';

const Chatlist = () => {

 const[addMode,setAddMode]=useState(false);
 const [messages, setMessages] = useState([])

 useEffect(() => {
   const fetchMessages = async () => {
     const { data, error } = await supabase.from('messages').select('*').neq('id', user.id);
     if (error) console.error('Error fetching messages:', error)
     else setMessages(data)
   }

   fetchMessages()
 }, [])


  return (
    <div className='chatList'>
    <div className='search'>
      <div className='searchBar'>
        <img src='./search.png' alt=''/>
        <input type='text' placeholder='Search'/>
      </div>
      <img src={addMode ? "./minus.png" : "./plus.png" } alt='' className='add'
        onClick={()=>setAddMode((prev)=> !prev)}
      />
    </div>
    <div class="h-80 overflow-y-auto  p-4">
    {messages.map(msg => (
        <div className='item' key={msg.id }>
         <img src={msg.avatar_url || './avatar.png'} alt=''/>
         <div className='texts'>
            <span>{msg.username}</span>
            <p>{msg.message}</p>
         </div>
    </div>
    ))}

    {addMode &&<AddUser/>}
    </div>
        </div>
  )    
}

export default Chatlist