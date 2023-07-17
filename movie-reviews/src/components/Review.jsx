import React from 'react'


//A text review a user can leave on a movie.
export default function Review(movieKey) {

    const disp = [];

    movieKey.reviews.forEach((review) => {
        if (review.title == movieKey.movieKey) {
            disp.push(review)          
        }
    });

    const listItems = disp.map(review =>
        <li key={review.id}>
            {review.content}
        </li>
        );

    return (
        <ul>
            {listItems}
        </ul>
    );
};

