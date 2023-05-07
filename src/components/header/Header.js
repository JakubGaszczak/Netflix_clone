import React, { useEffect } from 'react'
import { useState } from 'react'

import { BiSearch } from "react-icons/bi"
import { IoMdArrowDropdown } from "react-icons/io"

import logo from "../../assets/logo.png"
import avatar from "../../assets/avatar.png"


function Header({ setCategory }) {

    const [showInput, setShowInput] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const [toggleResize, setTogleResize] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)

    const handleResize = () => {

        if (window.innerWidth < 1200) {
            setTogleResize(true)
            setShowNav(true)
        } else {
            setTogleResize(false)
            setShowNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    const handleScroll = () => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 50) {
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }
    }

    window.addEventListener("scroll", handleScroll)

    const changeCategory = category => {
        setCategory(category)
    }


  return (
    <header className={isScrolling ? "section--header header header__black" : "section--header header"} id='header'>

        <nav className='header__nav flex'>
            <div className='header__leftSide flex--center'>
                <img className='header__logo' src={logo} alt="logo"/>
                <div onClick={() => setShowNav(showNav => !showNav)} className='header__mobile-toggle'>
                    <p className='flex--center'>Przeglądaj <IoMdArrowDropdown /></p>   
                </div>
                <ul style={showNav ? {display: "none"} : {display: "flex"}} className={toggleResize ?  "header__mobile-list" : "header__list flex--center"}>
                    <li><a onClick={() => changeCategory("all")} href="#">Strona główna</a></li>
                    <li><a onClick={() => changeCategory("action")} href="#movieRow" >Action</a></li>
                    <li><a onClick={() => changeCategory("comedy")} href="#movieRow" >Comedy</a></li>
                    <li><a onClick={() => changeCategory("horror")} href="#movieRow" >Horror</a></li>
                    <li><a onClick={() => changeCategory("romance")} href="#movieRow" >Romance</a></li>
                    <li><a onClick={() => changeCategory("documentaries")} href="#movieRow" >Documentaries</a></li>
                </ul>
            </div>

            <div className='header__rightSide flex--center'>
                <button className='button--white header__button-signin'>Sign In</button>
                <button className='button--red header__button-signup'>Sign Up</button>
                {/* <div className='header__search flex--center'>
                    <input className={showInput ? "header__input" : "hideInput"} placeholder='Tytuł' />
                    <BiSearch onClick={() => setShowInput(showInput => !showInput)} className='header__searchbar' />
                </div>
                <img className='header__avatar' src={avatar} /> */}

            </div>
        </nav>
    </header>
  )
}

export default Header