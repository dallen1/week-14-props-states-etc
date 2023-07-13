import React from 'react'


//A text review a user can leave on a movie.
export default function Review(movieKey) {
    const reviews = [
        {title: "title 1", id: "1", content: "review 1 for title 1"},
        {title: "title 1", id: "2", content: "review 2 for title 1"},
        {title: "title 1", id: "3", content: "review 3 for title 1"},
        {title: "title 2", id: "4", content: "review 1 for title 2"},
        {title: "title 2", id: "5", content: "review 2 for title 2"},
        {title: "title 2", id: "6", content: "review 3 for title 2"},
        {title: "title 3", id: "7", content: "review 1 for title 3"},
        {title: "title 3", id: "8", content: "review 2 for title 3"},
        {title: "title 3", id: "9", content: "review 3 for title 3"}
    ];

   
    const disp = [];

    reviews.forEach((review) => {
        //console.log(movieKey.movieKey==review.title)
        if (review.title == movieKey.movieKey) {
            disp.push(review)          
        }

    });

    const listItems = disp.map(review =>
        <li key={review.id}>
            {review.title}<br></br>
            {review.content}
        </li>
        );

    return (
        <ul>
            {listItems}
        </ul>
    );
};

