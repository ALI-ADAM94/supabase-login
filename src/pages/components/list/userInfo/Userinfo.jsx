import  './userInfo.css'
import supabase from '../../supbaseClient';
const Userinfo = () => {
  // Get user info
const user = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    console.error('Error fetching user:', error.message)
    return null
  }

  console.log('User info:', user)
  return user
}
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

export default Userinfo