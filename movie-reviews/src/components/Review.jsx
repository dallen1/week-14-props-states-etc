import React from 'react'
import Stars from './Stars';

//A text review a user can leave on a movie.
export default function Review({review}) {
    return (
        <div>
            <div className=''>
                <span className='reviewUser'>{review.user}:&nbsp;</span>
                <Stars stars={review.rating} disabled={true} />
            </div>
            <div className='border-bottom'>
                <span>Review:&nbsp;</span>
                <span className='reviewContent '>{review.content}</span>
               
            </div> <br/>
            
        </div>

    );
};

