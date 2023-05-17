import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../../context/AuthContext"

import logo from "../../assets/logo.png"

function Login() {
    const [email, setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [error, setError] = useState("")
    const {user, logIn} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        try {
            await logIn(email, password)
            navigate("/")
        } catch (error) {
            setError(error.message)
        }
    }


  return (
    <div className='login flex--center'>
            <img className='login__logo' src={logo} alt="logo" />

        <form onSubmit={handleSubmit} className='login__form flex'>
            <h2 className='login__title'>Sign In</h2>
            {error ? <p className='login__error'>Incorrect username or password</p> : null}
            <input onChange={(e) => setEmail(e.target.value)} id='email' type="email" placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} id='password' type="password" placeholder='Password' />
            <button type='submit' className='button--red login__button-signin'>
                Sign In
            </button>

            <Link to="/register">
                <button className='button--white login__button-signup'>Sign up now</button>
            </Link>
        </form>
    </div>
  )
}

export default Login