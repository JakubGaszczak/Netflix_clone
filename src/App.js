import "./css/App.css";
// import requests from './API/request'

import Login from "./components/login/Login";
import Register from "./components/register/Register";
// import Banner from "./components/banner/Banner";
// import Header from "./components/header/Header";
// import MovieRow from "./components/movieRow/MovieRow";
// import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="app">

        {/* <Login /> */}
        <Register />

        {/* <Header />
        <main>
          <Banner />

          <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
          <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />
        </main>
        <Footer /> */}

    </div>
  );
}

export default App;
