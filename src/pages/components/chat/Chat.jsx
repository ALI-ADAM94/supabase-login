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
        <img src='/avatar.png' alt=''/>
        <div className='texts'>
          <span>Ali Adam</span>
          <p>welcome to my App</p>
        </div>
      </div>
      <div className='icons'>
        <img src='/phone.png' alt=''/>
        <img src='/video.png' alt=''/>
        <img src='/info.png' alt=''/>
      </div>
    </div>
    <div className="center">

      <div className='message '>
        <img src='/avatar.png' alt=''/>
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
      <img src='/avatar.png' alt=''/>
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
      <img src='/avatar.png' alt=''/>
        <div className='texts'>
          <p>First message in my App</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className='message own'>
        <div className='texts'>
        <img src='/info.png' alt=''/>
          <p>First message in my App</p>
          <span>1 min ago</span>
        </div>
      </div>
      <div ref={endRef}></div>
    </div>
    <div className="bottom">
    <div className="icons flex items-center gap-3">
  <img src="/img.png" alt="" className="w-6 h-6 cursor-pointer" />
  <img src="/camera.png" alt="" className="w-6 h-6 cursor-pointer" />
  <img src="/mic.png" alt="" className="w-6 h-6 cursor-pointer" />
</div>

<div className="flex items-center gap-2 p-2  rounded-lg">
  <input
    type="text"
    placeholder="Type a message..."
    value={text}
    onChange={(e) => setText(e.target.value)}
    className="flex-1 px-3 py-2  rounded-md focus:outline-none"
  />
  
  <div className="emoji relative">
    <img
      src="/emoji.png"
      alt="emoji"
      onClick={() => setOpen((prev) => !prev)}
      className="w-6 h-6 cursor-pointer"
    />
    {open && (
      <div className="picker absolute bottom-full mb-2 z-10">
        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
      </div>
    )}
  </div>

  <button className="sendButton bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
    Send
  </button>
</div>
</div>
    </div>
  )
}

export default Chat