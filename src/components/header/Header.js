import React, { useEffect } from 'react'
import { useState } from 'react'

import { BiSearch } from "react-icons/bi"
import { IoMdArrowDropdown } from "react-icons/io"

import logo from "../../assets/logo.png"
import avatar from "../../assets/avatar.png"


function Header() {

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

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })


    const handleScroll = () => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 50) {
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }
    }

    window.addEventListener("scroll", handleScroll)


  return (
    <header className={isScrolling ? "section--header header header__black" : "section--header header"} id='header'>

        <nav className='header__nav flex'>
            <div className='header__leftSide flex--center'>
                <img className='header__logo' src={logo} alt="logo"/>
                <div onClick={() => setShowNav(showNav => !showNav)} className='header__mobile-toggle'>
                    <p className='flex--center'>Przeglądaj <IoMdArrowDropdown /></p>   
                </div>
                <ul style={showNav ? {display: "none"} : {display: "flex"}} className={toggleResize ?  "header__mobile-list" : "header__list flex--center"}>
                    <li><a href="#banner">Strona główna</a></li>
                    <li><a href='Action Movies'>Action</a></li>
                    <li><a href='Comedy Movies'>Comedy</a></li>
                    <li><a href='Horror Movies'>Horror</a></li>
                    <li><a href='Romance Movies'>Romance</a></li>
                    <li><a href='Documentaries'>Documentaries</a></li>
                </ul>
            </div>

            <div className='header__rightSide flex--center'>
                <div className='header__search flex--center'>
                    <input className={showInput ? "header__input" : "hideInput"} placeholder='Tytuł' />
                    <BiSearch onClick={() => setShowInput(showInput => !showInput)} className='header__searchbar' />
                </div>
                <img className='header__avatar' src={avatar} />

            </div>
        </nav>
    </header>
  )
}

export default Header