import React from 'react'
import {calcMovieRating} from "../util";
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'


//a component that represents movie data (i.e. image, synopsis, rating, etc…)
export default function Movie({movie, pushReview}) {

    const rating = calcMovieRating(movie.reviews);

        return (
        <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.image}></img>
            <p>{movie.synopsis}</p>
            <ReviewList reviews = {movie.reviews} />
            <ReviewForm movieID={movie.id} pushReview = {pushReview} />

        </div>
    );
};