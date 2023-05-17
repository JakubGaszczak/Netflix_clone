import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from '../../context/AuthContext'
import { IoIosArrowForward } from "react-icons/io"

import logo from "../../assets/logo.png"

function Register() {

    const [email, setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signUp(email, password)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='register flex--center'>
        <header className='register__header'>
            <Link to="/">
                <img className='register__logo' src={logo} alt="logo" />
            </Link>
            <Link to="/login">
                <button className='button--red register__button-signin'>Sign In</button>
            </Link>
        </header>

        <main className='register__content'>
            <div className='register__title'>
                <h1>
                    Unlimited movies, TV shows, and more
                </h1>
                <h3>Watch anywhere. Cancel anytime</h3>
            </div>

            <form onSubmit={handleSubmit} className='register__form flex--center'>
                <input onChange={(e) => setEmail(e.target.value)} className='register__input-email' type="email" id='email' placeholder='Email address' />
                <input onChange={(e) => setPassword(e.target.value)}t className='register__input-password' type="password" id="password" placeholder='Password' />
                <button className='button--red register__button-getstarted flex--center'>
                    Get Started 
                    <IoIosArrowForward />
                    </button>
            </form>
        </main>
    </div>
  )
}

export default Register