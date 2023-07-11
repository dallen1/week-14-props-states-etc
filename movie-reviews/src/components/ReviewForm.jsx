import React from 'react'

//a form at the bottom of a Movie component that allows users to leave reviews.
// When submitted, the review should be added to the movie. 
//All this data can be stored in an array, 
//no networking or database needed for this assignment.
export default function ReviewForm() {

    return (
        <form>
            <input type='text' className='form form-control'></input>
            <button className='btn btn-primary'></button>
        </form>
    );
};