import React from 'react'
import Stars from './Stars'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'


//a component that represents movie data (i.e. image, synopsis, rating, etc…)
const Movie = (title, image, synopsis, rating, review) => {

    return (
        <div>
            <h3>{title}</h3>
            <img src={image}></img>
            <p>{rating}</p>
            <p>{synopsis}</p>
            <Stars />
            <ReviewList {...review}/>
            <ReviewForm />
        </div>
    );
};