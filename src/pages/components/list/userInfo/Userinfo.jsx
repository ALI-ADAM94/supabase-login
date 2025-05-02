import  './userInfo.css'
import supabase from '../../../../../supbaseClient.js';
const Userinfo = () => {
  // Get user info

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
  
      if (!session) {
        console.log('No session found, user is not logged in.')
        return
      }
  
      const {
        data: { user },
      } = await supabase.auth.getUser()
  
      console.log('User:', user)
      setUser(user)
    }
  
    checkAuth()
  }, [])
  
  return (
    <div className='userInfo'>
    <div className='user'>
    <img src="./avatar.png" alt=''/>
    <h4>{user.email} </h4>
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