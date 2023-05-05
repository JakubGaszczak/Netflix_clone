import React from 'react'
import { IoIosArrowForward } from "react-icons/io"

import logo from "../../assets/logo.png"

function Register() {
  return (
    <div className='register flex--center'>
        <header className='register__header'>
            <img className='register__logo' src={logo} alt="logo" />
            <button className='button register__button-signin'>Sign In</button>
        </header>

        <main className='register__content'>
            <div className='register__title'>
                <h1>
                    Unlimited movies, TV shows, and more
                </h1>
                <h3>Watch anywhere. Cancel anytime</h3>
            </div>

            <form className='register__form flex--center'>
                <input className='register__input-email' type="email" id='email' placeholder='Email address' />
                <input className='register__input-password' type="password" id="password" placeholder='Password' />
                <input className='register__input-password2' type="password" id="password2" placeholder='Confirm password' />
                <button className='register__button-getstarted flex--center'>
                    Get Started 
                    <IoIosArrowForward />
                    </button>
            </form>
        </main>
    </div>
  )
}

export default Register