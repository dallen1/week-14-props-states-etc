import React, {useState} from 'react'
import Review from './Review';

//a container inside of a Movie that houses Review components.
export default function ReviewList(movieKey) {
    return (
        <div>
        <Review movieKey={movieKey.movieKey} />
        </div>
    );
};