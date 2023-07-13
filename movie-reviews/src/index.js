import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import MovieList from './components/MovieList';

const MOVIES = [
  {title: "title 1", image:"../img/1.png", synopsis: "ipsem lorem blah blah blah 1", rating: "g"},
  {title: "title 2", image:"../img/2.png", synopsis: "ipsem lorem blah blah blah 2", rating: "pg"},
  {title: "title 3", image:"../img/3.png", synopsis: "ipsem lorem blah blah blah 3", rating: "pg-13"}
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
    <MovieList movies={MOVIES}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
