import React from 'react'

import logo from "../../assets/logo.png"

function Login() {
  return (
    <div className='login flex--center'>
        <img className='login__logo' src={logo} alt="logo" />

        <form className='login__form flex'>
            <h2 className='login__title'>Sign In</h2>
            <input id='email' type="email" placeholder='Email' />
            <input id='password' type="password" placeholder='Password' />
            <button className='button--red login__button-signin'>
                Sign In
            </button>

            <button className='button--white login__button-signup'>
                Sign up now
            </button>
        </form>
    </div>
  )
}

export default Login