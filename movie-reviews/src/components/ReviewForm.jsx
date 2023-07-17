import React, {useState} from 'react'
import Stars from './Stars';

//a form at the bottom of a Movie component that allows users to leave reviews.
// When submitted, the review should be added to the movie. 
//All this data can be stored in an array, 
//no networking or database needed for this assignment.
export default function ReviewForm({movieID, pushReview}) {
 
    const [user, setUser] = useState("");
    const [review, setReview] = useState("");
  
    const userHandler = (e) => {
      setUser(e.target.value);
    }
  
    const reviewHandler = (e) => {
      setReview(e.target.value);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const stars = e.target.rating.value;
  
      pushReview(movieID, {
            user,
            review,
            rating: stars
          }
      );
  
      resetForm();
    }
  
    const resetForm = () => {
      setUser("");
      setReview("");
    }

    return (

        <form onSubmit={handleSubmit}>
            <label>Leave a Review:</label>
            <textarea 
                type='text' 
                className='form-control' 
                rows="3"
                placeholder='Comment'
                value={review}
                onChange={reviewHandler}
            />
            <br/>
            <Stars disabled = {false} stars={0} />
            <br/>
            <button className='btn btn-primary'>Submit</button>

        </form>
        
    );
};