import React from 'react'
import Stars from './Stars';

//A text review a user can leave on a movie.
export default function Review({review}) {
    return (
        <div>
            <span className='reviewUser'>{review.user}</span>:&nbsp;
            <span className='reviewContent'>{review.content}</span>
            <Stars stars={review.rating} disabled={true} />
        </div>

    );
};

