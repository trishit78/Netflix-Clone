import React from 'react' 
import './Profile.css'
import Navbar from '../Navbar/Navbar'
import Logo2 from "../../assets/avatar.png";
import PlanScreen from '../PlanScreen/PlanScreen';
function Profile() {
  return (
    <div className='profile'>
      <Navbar/>
      <div className='profile_body'>
        <h1>Edit Profile</h1>
        <div className='profile_info'>
        <img src={Logo2} alt=""  />
        <div className='profile_details'>
            <h2>trishit456@gmail.com</h2>
            <div className='profile_plans'>

            <h1 className='text-xl font-semibold  mt-2'>Plans</h1>
            <PlanScreen/>

                <button className='profile_signOut'>Sign Out</button>
            </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
