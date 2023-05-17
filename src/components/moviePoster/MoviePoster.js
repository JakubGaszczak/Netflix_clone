import React, { useState } from 'react'

function MoviePoster({ movieImg, movieTitle, movieDate }) {

  const baseUrl = "https://image.tmdb.org/t/p/original/"

  const [hoverInfo, setHoverInfo] = useState(false)

  return (
    <div onMouseEnter={() => setHoverInfo(true)} onMouseLeave={() => setHoverInfo(false)} className='moviePoster'>
      <img 
        className='moviePoster__img' 
        src={`${baseUrl}${movieImg}`} 
        alt={movieTitle}/>
        
      <div style={{display: hoverInfo ? "flex" : "none"}} className='moviePoster__information'>
        <p className='moviePoster__title'>{movieTitle}</p>
        <p className='moviePoster__date'>{movieDate}</p>
      </div>
    </div>
  )
}

export default MoviePoster