import './App.css';
import { useState,useEffect } from 'react';
import MovieCard from './MovieCard'

import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=1b4942cf';
const movie1 = {
  "Title": "Spiderman and Grandma",
  "Year": "2009",
  "imdbID": "tt1433184",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
}
function App() {
 const [movies, setMovies] = useState([])
 const [searchTerm,setSearchTerm] = useState('');


 const searchMovies = async (title) => {
     const response = await fetch(`${API_URL}&s=${title}`); 
     const data = await response.json();

     setMovies(data.Search)
 }
useEffect(() => {
   searchMovies('Spiderman');
} , [])

  return (
    <div className="App">
      <h2>MovieLand</h2>

      <div className="search">
        <input placeholder="Search for a movies" value={searchTerm}
        onChange={(e) =>setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
         movies?.length > 0
         ? (
          <div className="container">
          {movies.map((movie) => (
            <MovieCard movie = {movie}/>
          ))}
         </div>
         ) :
         (
          <div>
            <h2>No movies found</h2>
          </div>
         )
      }

    </div>
  );
}

export default App;
