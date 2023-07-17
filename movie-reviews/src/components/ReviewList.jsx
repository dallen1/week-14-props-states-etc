import React from 'react'
import Review from './Review';
import ReviewForm from './ReviewForm';

//a container inside of a Movie that houses Review components.

export default function ReviewList(movieKey) {

    return (
        <div>
            <Review movieKey={movieKey.movieKey} reviews={REVIEWS} />
            <ReviewForm movieKey={movieKey.movieKey} />

        </div>
    );
};