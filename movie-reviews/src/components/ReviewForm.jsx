import React, {useState} from 'react'
import {REVIEWS} from './ReviewList'
import Review from './Review';

//a form at the bottom of a Movie component that allows users to leave reviews.
// When submitted, the review should be added to the movie. 
//All this data can be stored in an array, 
//no networking or database needed for this assignment.
export default function ReviewForm({movieKey}) {
    const [comment, setComment] = useState('');
    let id=9;

    function handleSubmit(e) {
        e.preventDefault();
        id=REVIEWS.length+1;
        const fullcomment = {
            title: movieKey, 
            id: id,
            content: comment
        }; 
        REVIEWS.push(fullcomment)
        console.log(setComment)
        //setComment={comment};
        
      }    

    return (

        <form onSubmit={handleSubmit}>
            <label>Leave a Review:</label>
            <textarea 
                type='text' 
                className='form-control' 
                rows="3"
                placeholder='Comment'
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <br/>
            <button className='btn btn-primary'>Submit</button>
        </form>
        
    );
};