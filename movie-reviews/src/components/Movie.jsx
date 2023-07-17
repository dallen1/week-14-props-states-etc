import React from 'react'
import Stars from './Stars'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'


//a component that represents movie data (i.e. image, synopsis, rating, etc…)
export default function Movie({movies}) {
    
    const movie = movies.map(movie =>
        <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.image}></img>
            <p>{movie.rating}</p>
            <p>{movie.synopsis}</p>
            <Stars movieKey={movie.title} />
            <ReviewList movieKey= {movie.title} />
        </div>
      );

    return (
        <div>
            {movie}
        </div>
    );
};