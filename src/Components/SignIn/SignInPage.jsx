import React, { useRef } from 'react';
import { auth } from '../../firebase.js';
import './SignInPage.css';


function SignInPage() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = (e) => {
        e.preventDefault();
        // Add sign-in logic using emailRef.current.value and passwordRef.current.value
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser)=>{
                    console.log(authUser)
            }).catch((error)=>{
                alert(error.message)
            })
    };

    const register = (e) => {
        e.preventDefault();
        // Add registration logic using emailRef.current.value and passwordRef.current.value
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser)=>{
                    console.log(authUser)
            }).catch((error)=>{
                alert(error.message)
            })
    };

    return (
        <div className='signIn'>
            {/* <input type="text" className='text-black' /> */}
            <form >
                <h1 className='text-3xl font-semibold'>Sign In</h1>
                
                <input ref={emailRef} type="email" placeholder='Email' className='text-black'  required />
                <input ref={passwordRef} type="password" placeholder='Password'  className='text-black' />
                <button type='submit' onClick={signIn} >Sign In</button>
                <h4 className='mt-4'>
                    <span className='text-gray-500'>New to Netflix?</span>
                    <span className='link_button' onClick={register}>Sign Up Now</span>
                </h4>
            </form>
        </div>
    );
}

export default SignInPage;
