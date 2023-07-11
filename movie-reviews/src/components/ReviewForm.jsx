import React from 'react'

//a form at the bottom of a Movie component that allows users to leave reviews.
// When submitted, the review should be added to the movie. 
//All this data can be stored in an array, 
//no networking or database needed for this assignment.
export default function ReviewForm(movieKey) {

    let movieID=`reviewFor`+{movieKey};
    return (
       
        <form>
            <label htmlFor=''>Leave a Review:</label>
            <textarea type='text' className='form-control' rows="3"></textarea><br></br>
            <button className='btn btn-primary' id={movieID} >Submit</button>
        </form>
        
    );
};