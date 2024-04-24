import React from 'react' 
import './Profile.css'
import Navbar from '../Navbar/Navbar'
import Logo2 from "../../assets/avatar.png";
import PlanScreen from '../PlanScreen/PlanScreen';
import { auth } from '../../firebase';
function Profile({user,setUser}) {


  const handleLogout = () => {
    auth.signOut().then(()=>{
      console.log("logged out")
      setUser(null)
    }).catch((error)=>{
      console.log(error.message)
    })
  }


//console.log(user.multiFactor.user.email)


  return (
    <div className='profile'>
      <Navbar/>
      <div className='profile_body'>
        <h1>Edit Profile</h1>
        <div className='profile_info'>
        <img src={Logo2} alt=""  />
        <div className='profile_details'>
            <h2>{user.multiFactor.user.email}</h2>
            <div className='profile_plans'>

            <h1 className='text-xl font-semibold  mt-2'>Plans</h1>
            <PlanScreen/>

                <button
                onClick={handleLogout}
                className='profile_signOut'>Sign Out</button>
            </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
