import React, { useState } from 'react';
import '../css/LogIn.css';
import { Link } from 'react-router-dom';
import { auth } from 'firebase';


function LogIn() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

function login(e) {
    e.preventDefault();
    //..login logic
    auth.signInWithEmailAndPassword(email,password)
}

function register(e) {
    e.preventDefault();
    //..register logic
}

    return (
        <div className='login'>
            <Link to ='/'>
                <img 
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png'
                    alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} type='email' />
                    <h5>Password</h5>
                    <input value={password} type='password' />
                    <button 
                        onClick={login}
                        type='submit'
                        className='login__signInButton'>
                            Sign In
                    </button>
                </form>

                <p>
                    By siging-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-based Ads Notice.
                </p>
                <button 
                    onClick={register}
                    className='login__registerButton'>
                        Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default LogIn;
  