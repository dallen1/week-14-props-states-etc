import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import MovieList from './components/MovieList';

const movies = [
  {title: "title 1", image:"../img/1.png", synopsis: "ipsem lorem blah blah blah 1", rating: "g", 
  review: {
      id: "1", content: "review 1 for title 1", 
      id: "2", content: "review 2 for title 1",
      id: "3", content: "review 3 for title 1"
  }},
  {title: "title 2", image:"./img/2.png", synopsis: "ipsem lorem blah blah blah 2", rating: "pg", 
  review: {
      id: "1", content: "review 1 for title 2", 
      id: "2", content: "review 2 for title 2",
      id: "3", content: "review 3 for title 2"
  }},
  {title: "title 3", image:"./img/3.png", synopsis: "ipsem lorem blah blah blah 3", rating: "pg-13", 
  review: {
      id: "1", content: "review 1 for title 3", 
      id: "2", content: "review 2 for title 3",
      id: "3", content: "review 3 for title 3"
  }}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
    <MovieList {...movies} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
