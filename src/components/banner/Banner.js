import React, { useEffect, useState } from 'react'
import { BsFillPlayFill } from "react-icons/bs"
import { AiOutlineInfoCircle } from "react-icons/ai"

import axios from "../../API/axios"
import requests from '../../API/request'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1 )
                ]
            )
            return request
        }

        fetchData()
    }, [])

  return (
    <div style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
        }} 
        id="banner"
        className='banner section'>
        <h1 className='banner__title'>
            {movie.name}
        </h1>

        <p className='banner__description'>
            {movie.overview}
        </p>

        <div className='banner__btns'>
            <button className='button banner__btns-play flex--center'>
                <BsFillPlayFill className='banner__icons' />
                Odtwórz
            </button>
            <button className="button banner__btns-informations flex--center">
                <AiOutlineInfoCircle className='banner__icons' />
                Więcej informacji
            </button>
        </div>
    </div>
  )
}

export default Banner