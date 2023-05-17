import React, { useEffect, useState } from 'react'
import axios from "../../API/axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1860,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
          },
          {
            breakpoint: 1560,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <div id='movieRow' className='movieRow section--rows'>
        <h3 className='movieRow__title'>{title}</h3>
        <div className='movieRow__wrapper'>
                <Slider {...settings} className='movieRow__row'>
                      {movies.map((movie, key) => 
                          (movie.backdrop_path) && (
                              <MoviePoster
                                  movieDate={movie.release_date}
                                  movieTitle={movie.title} 
                                  movieImg={movie.backdrop_path}  
                                  key={key} />
                      )
                      )}
                </Slider>
        </div>
    </div>
  )
}

export default MovieRow

