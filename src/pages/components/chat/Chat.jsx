import { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import supabase from '../../../../supbaseClient';
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const endRef = useRef(null);

  // Get current user
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUser(user);
    };
    getUser();
  }, []);

  // Fetch initial messages & listen in realtime
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true });

      if (!error) setMessages(data);
      else console.error("Fetch error:", error);
    };

    fetchMessages();

    const channel = supabase
      .channel('realtime-messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Auto scroll to last message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Send message
  const handleSend = async () => {
    if (!text.trim()) return;

    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("User not authenticated", authError);
      return;
    }

    const { error } = await supabase.from('messages').insert({
      user_id: user.id,
      username: user.user_metadata.full_name || user.email,
      avatar_url: user.user_metadata.avatar_url || '/avatar.png',
      message: text
    });

    if (error) {
      console.error("Insert error:", error);
    } else {
      setText("");
    }
  };

  // Handle emoji select
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  // Format time
  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diff = Math.floor((now - past) / 1000);

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
    return past.toLocaleDateString();
  };

  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src='/avatar.png' alt='' />
          <div className='texts'>
            <span>Ali Adam</span>
            <p>Welcome to my App</p>
          </div>
        </div>
        <div className='icons'>
          <img src='/phone.png' alt='' />
          <img src='/video.png' alt='' />
          <img src='/info.png' alt='' />
        </div>
      </div>

      <div className="center">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`message ${msg.user_id === currentUser?.id ? 'own' : ''}`}
          >
            {msg.user_id !== currentUser?.id && (
              <img src={msg.avatar_url || '/avatar.png'} alt='' />
            )}
            <div className='texts'>
              <p>{msg.message}</p>
              <span>{getTimeAgo(msg.created_at)}</span>
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="/img.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="/emoji.png" alt="emoji" onClick={() => setOpen((prev) => !prev)} />
          {open && (
            <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
        <button className="sendButton" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};


export default Chat;