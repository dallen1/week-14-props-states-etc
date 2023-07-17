import React from 'react'
import {calcMovieRating} from "../util";
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'


//a component that represents movie data (i.e. image, synopsis, rating, etc…)
export default function Movie({movie, pushReview}) {

    const rating = calcMovieRating(movie.reviews);

        return (
        <div className='col-sm' key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} height='400px' width='auto'></img>
            <p>{movie.synopsis}</p>
            <div>Avg User Rating: {rating}
                <h5>Leave a Review:</h5>
                <ReviewForm movieID={movie.id} pushReview = {pushReview} />
            </div>
            <div>
                <h5>User Reviews:</h5>
                <ReviewList reviews = {movie.reviews} />
            </div>
        </div>
    );
};