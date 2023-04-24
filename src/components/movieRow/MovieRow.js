import React, { useEffect, useState } from 'react'
import axios from "../../API/axios"
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

    console.log(movies)

  return (
    <div className='movieRow'>
        <h3 className='movieRow__title'>{title}</h3>
        <div className='movieRow__row'>
            {movies.map((movie, key) => (
                <MoviePoster movieTitle={movie.title} movieImg={movie.backdrop_path}  key={key} />
            ))}
        </div>
    </div>
  )
}

export default MovieRow