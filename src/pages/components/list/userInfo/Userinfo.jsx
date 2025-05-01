import  './userInfo.css'
import supabase from '../../../../../supbaseClient.js';
const Userinfo = () => {
  // Get user info
const get = async (ev) => {
  const { data, error } = await supabase.auth.getUser({
    data: email,
   
  });

  if (error) {
    console.error('Error fetching user:', error.message)
    return null
  }
  if(data){
      console.log('User info:', data)
  return data
  }

}
  return (
    <div className='userInfo'>
    <div className='user'>
    <img src="./avatar.png" alt=''/>
    <h4>{get.email} </h4>
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