import React from 'react'
import Review from './Review';

//a container inside of a Movie that houses Review components.

export default function ReviewList({reviews}) {

    return (
        <div className='reviews'>
            {
                reviews.map(review => {
                    return (
                    <div className='review' key={review.id}>
                      <Review review = {review} />
                    </div>
                    );
                })
                
            }
        </div>
    );
};