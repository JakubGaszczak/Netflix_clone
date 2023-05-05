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
            <div className='footer__links-row'>
              <p>Audiodeskrypcja</p>
              <p>Relacje z inwestorami</p>
              <p>Informacje prawne</p>
            </div>

            <div className='footer__links-row'>
              <p>Centrum pomocy</p>
              <p>Praca</p>
              <p>Ustawienia plików cookie</p>
            </div>

            <div className='footer__links-row'>
              <p>Karty podarunkowe</p>
              <p>Warunki korzystania</p>
              <p>Informacje o firmie</p>
            </div>

            <div className='footer__links-row'>
              <p>Media Center</p>
              <p>Prywatność</p>
              <p>Skontaktuj się z nami</p>
            </div>   
          </div>
    </footer>
  )
}

export default Footer