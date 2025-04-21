import { useState} from 'react';
import './chatList.css';
import AddUser from './addUser/addUser';
const Chatlist = () => {
  const[addMode,setAddMode]=useState(false);

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
    <div class="h-64 overflow-y-auto border p-4">
    <div className='item'>
         <img src='./avatar.png' alt=''/>
         <div className='texts'>
            <span>Ali Adam</span>
            <p>Hello</p>
         </div>
    </div>
    <div className='item'>
         <img src='./avatar.png' alt=''/>
         <div className='texts'>
            <span>Ali Adam</span>
            <p>Hello</p>
         </div>
    </div>
    <div className='item'>
         <img src='./avatar.png' alt=''/>
         <div className='texts'>
            <span>Ali Adam</span>
            <p>Hello</p>
         </div>
    </div>
    <div className='item'>
         <img src='./avatar.png' alt=''/>
         <div className='texts'>
            <span>Ali Adam</span>
            <p>Hello</p>
         </div>
    </div>
    <div className='item'>
         <img src='./avatar.png' alt=''/>
         <div className='texts'>
            <span>Ali Adam</span>
            <p>Hello</p>
         </div>
    </div>
    <div className='item'>
         <img src='./avatar.png' alt=''/>
         <div className='texts'>
            <span>Ali Adam</span>
            <p>Hello</p>
         </div>
    </div>
    </div>
    {addMode &&<AddUser/>}
    </div>
    
  )    
}

export default Chatlist