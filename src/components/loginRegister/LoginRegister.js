import React from 'react'
import logo from "../../assets/logo.png"
import "../../css/LoginRegister.css"

function LoginRegister() {
  return (
    <div className='section--header loginregister'>
        <div className='loginregister__background'>
            <div className='loginregister__overlay'></div>
        </div>
        <header className='loginregister__header flex'>
            <img className='loginregister__logo' src={logo} alt="logo" />
            <button className='button button--login loginregister__button-login'>
                Log In
            </button>
        </header>

        <main className='loginregister__main'>
            <h1 className='loginregister__title'>
                Unlimited movies, TV
            </h1>
        </main>
    </div>
  )
}

export default LoginRegister