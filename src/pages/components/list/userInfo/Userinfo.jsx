import  './userInfo.css'
import supabase from '../../../../../supbaseClient.js';
const Userinfo = () => {
  // Get user info
  const [email, setEmail] = useState(null)

  useEffect(() => {
    const getUserInfo = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (error) {
        console.error('Error fetching user:', error.message)
        return
      }

      console.log('User info:', user)
      setEmail(user?.email || 'No email found')
    }

    getUserInfo()
  }, [])
  
  return (
    <div className='userInfo'>
    <div className='user'>
    <img src="./avatar.png" alt=''/>
    <h4>{email} </h4>
    </div>
    <div className='icons'>
        <img src="./more.png" alt=''/>
        <img src="./video.png" alt=''/>
        <img src="./edit.png" alt=''/>
    </div>
    </div>
  )
}

export default Userinfo;