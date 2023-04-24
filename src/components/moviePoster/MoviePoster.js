import React from 'react'

function MoviePoster({ movieImg, movieTitle }) {

  const baseUrl = "https://image.tmdb.org/t/p/original/"

  return (
    <div className='moviePoster'>
      <img 
        className='moviePoster__img' 
        src={`${baseUrl}${movieImg}`} 
        alt={movieTitle}/>
    </div>
  )
}

export default MoviePoster