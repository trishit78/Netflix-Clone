import React, { useState } from 'react' 

import './Login.css'
import SignInPage from '../SignIn/SignInPage';
function Login() {

    const [signIn, setSignIn] = useState(false);
    console.log(signIn)

  return (
    <div className='loginScreen'>
        <div className='login_background'>
            <img 
            src="https://cdn.pixabay.com/photo/2022/08/24/20/20/netflix-7408710_1280.png" 
            className='login_logo'
            alt="" 
            />
            <button className='login_button'
            onClick={()=>{setSignIn(!signIn)}}
            >
                Sign In
            </button>
            <div className='loginScreen_gradient'></div>

        </div>

        <div className='login_body'>
            {
                signIn ? (<SignInPage/>):(
                    <>
                    <h1>
                        Unlimited films,TV programs and more.
                    </h1>
                    <h2 className='text-3xl font-semibold mb-4'>Watch anywhere  , cancel at any time.</h2> 
                    <h3>Ready to watch ? Enter your email to create or restart your membership</h3>
    
                    <div className='login_input'>
                        <form >
                            <input
                             className='mt-8 '
                            type="email" placeholder='  Email Address' />
                            <button 
                            onClick={()=>{setSignIn(!signIn)}}
                            className='login_input_button font-semibold '
                            >
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>
                )
            }
               
            

        </div>


    </div>
  )
}

export default Login
