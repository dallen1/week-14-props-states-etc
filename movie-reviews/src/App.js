import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import MovieList from './components/MovieList';
import { useState } from 'react';
import {MOVIES} from './assets/data/MOVIES.js'
import "./style.css";





export default function App() {
  const [movies, setMovies] = useState(MOVIES);

  const pushReview = (MovieID, content) => {
    console.log(content)
    const updatedMovies = [...movies];
    const i = updatedMovies.findIndex(movie => movie.id === MovieID);
    updatedMovies[i].reviews.push(content);
    setMovies(updatedMovies);

  };


  return (
    <div className='container-fluid'>
    <MovieList movies={movies} pushReview = {pushReview}/>
    </div>
  );

}

