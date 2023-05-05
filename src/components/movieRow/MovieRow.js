import React, { useEffect, useRef, useState } from 'react'
import axios from "../../API/axios"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

import MoviePoster from '../moviePoster/MoviePoster'


function MovieRow({ fetchUrl, title }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchUrl])

    const rowRef = useRef()
    const [slideNumber, setSlideNumber] = useState(0)
    const [isClicked, setIsClicked] = useState(false)

    let numberOfSlides = 6


    // const checkScreenWidth = () => {
    //     let windowWidth = window.innerWidth

    //     if (windowWidth !== window.innerWidth) {
    //         windowWidth = window.innerWidth

    //         if (windowWidth < 6000) {
    //             numberOfSlides = 5
    //         } else if (windowWidth === 4960) {
    //             numberOfSlides = 4
    //         } else if (windowWidth === 3768) {
    //             numberOfSlides = 3
    //         } else if (windowWidth === 2448) {
    //             numberOfSlides = 2
    //         }
    //     }

    // }

    
    const handleClick = (direction) => {

        if (!isClicked) {

            setIsClicked(true)
            let distance = rowRef.current.getBoundingClientRect().x - 48
                if (direction === "left" && slideNumber > 0) {
                    rowRef.current.style.transform = `translateX(${297.6 + distance}px)`
                    setSlideNumber(slideNumber - 1)
                }
                if (direction === "right" && slideNumber < (movies.length - numberOfSlides)) {
                    rowRef.current.style.transform = `translateX(${-297.6 + distance}px)`
                    setSlideNumber(slideNumber + 1)
                } 
                
                setTimeout(() => {
                    setIsClicked(false);
                }, 1000);
        }

    }

  return (
    <div className='movieRow section--rows'>
        <h3 className='movieRow__title'>{title}</h3>
        <div className='movieRow__wrapper'>
                <button disabled={!isClicked}><IoIosArrowBack className='movieRow__arrow left' onClick={() => handleClick("left")}  /></button>
                <div className='movieRow__row' ref={rowRef}>
                    {movies.map((movie, key) => 
                        (movie.backdrop_path) && (
                            <MoviePoster movieTitle={movie.title} movieImg={movie.backdrop_path}  key={key} />
                        )     
                    )}
                </div>
                <button disabled={!isClicked}><IoIosArrowForward className='movieRow__arrow right' onClick={() => handleClick("right")} /></button>
        </div>
    </div>
  )
}

export default MovieRow