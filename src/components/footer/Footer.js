import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"

function Footer() {
  return (
    <footer className='footer section'>
        <div className='footer__socials'>
            <BsFacebook />
            <AiFillInstagram />
            <AiFillTwitterCircle />
            <AiFillYoutube />
        </div>

        <div className='footer__links'>
            <ul className='footer__links-list grid'>
                <li>Centrum pomocy</li>
                <li>Praca</li>
                <li>Ustawienia plików cookie</li>
                <li>Karty podarunkowe</li>
                <li>Warunki korzystania</li>
                <li>Informacje o firmie</li>
                <li>Media Center</li>
                <li>Prywatność</li>
                <li>Skontaktuj się z nami</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer