import { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';
const Chat = () => {
  const [open,setOpen] = useState(false);
  const[text,setText] = useState("");
  const endRef = useRef(null)
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  

  const handleEmoji = e =>{
    setText(prev => prev+e.emoji);
    setOpen(false);
  }

  return (
    <div className='chat'>
    <div className='top'>
      <div className='user'>
        <img src='/src/assets/avatar.png' alt=''/>
        <div className='texts'>
          <span>Ali Adam</span>
          <p>welcome to my App</p>
        </div>
      </div>
      <div className='icons'>
        <img src='/src/assets/phone.png' alt=''/>
        <img src='/src/assets/video.png' alt=''/>
        <img src='/src/assets/info.png' alt=''/>
      </div>
    </div>
    <div className='center'>
      <div className='message '>
        <img src='/src/assets/avatar.png' alt=''/>
        <div className='texts'>
          <p>First message in my App</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message own'>
     
        <div className='texts'>
          <p>First message in my App</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message '>
      <img src='./avatar.png' alt=''/>
        <div className='texts'>
          <p>First message in my App</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message own'>
        <div className='texts'>
          <p>First message in my App</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message '>
      <img src='/src/assets/avatar.png' alt=''/>
        <div className='texts'>
          <p>First message in my App</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message own'>
        <div className='texts'>
        <img src='/src/assets/info.png' alt=''/>
          <p>First message in my App</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div ref={endRef}></div>
    </div>
    <div className='bottom'>
      <div className='icons'>
        <img src='/src/assets/img.png' alt=''/>
        <img src='/src/assets/camera.png' alt=''/>
        <img src='/src/assets/mic.png' alt=''/>
      </div>
      <input type='text' placeholder='Type a message...' value={text} onChange={(e)=>setText(e.target.value)}/>
      <div className='emoji'>
        <img src='/src/assets/emoji.png' alt='' onClick={()=>setOpen((prev) => !prev)}/>
         <div className='picker'>
          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
         </div>
      </div>
      <button className='sendButton'>Send</button>
    </div>
    </div>
  )
}

export default Chat