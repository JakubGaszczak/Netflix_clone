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

  return (
    <header className='section--header header' id='header'>

        <nav className='header__nav flex'>
            <div className='header__leftSide flex--center'>
                <img className='header__logo' src={logo} alt="logo"/>
                <div onClick={() => setShowNav(showNav => !showNav)} className='header__mobile-toggle'>
                    <p className='flex--center'>Przeglądaj <IoMdArrowDropdown /></p>   
                </div>
                <ul style={showNav ? {display: "none"} : {display: "flex"}} className={toggleResize ?  "header__mobile-list" : "header__list flex--center"}>
                    <li>Strona główna</li>
                    <li>Seriale i programy</li>
                    <li>Filmy</li>
                    <li>Nowe i popularne</li>
                    <li>Moja Lista</li>
                    <li>Przeglądaj wg języka</li>
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