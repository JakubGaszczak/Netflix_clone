import React, { useState } from 'react'
import requests from './API/request'

import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import MovieRow from "./components/movieRow/MovieRow";
import Footer from "./components/footer/Footer";


function HomeScreen() {

  const [category, setCategory] = useState("all")

  const handleCategory = category => {

    switch (category) {
      case "action":
        return <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      case "comedy":
        return <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      case "horror":
        return <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      case "romance":
        return <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      case "documentaries":
        return <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />
      case "all":
        return (
          <>
            <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
            <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />
          </>
        )
    }

  }

  return (
    <div className='homeScreen'>
        <header>
            <Header setCategory={setCategory} />
            <Banner />
        </header>

        <main>
          {handleCategory(category)}
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}


export default HomeScreen