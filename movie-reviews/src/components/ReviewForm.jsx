import React, {useState} from 'react'
import Stars from './Stars';
import { v4 as uuidv4 } from 'uuid';


//a form at the bottom of a Movie component that allows users to leave reviews.
// When submitted, the review should be added to the movie. 
//All this data can be stored in an array, 
//no networking or database needed for this assignment.
export default function ReviewForm({movieID, pushReview}) {
 
    const [user, setUser] = useState("");
    const [content, setReview] = useState("");
  
    const userHandler = (e) => {
      setUser(e.target.value);
    }
  
    const reviewHandler = (e) => {
      setReview(e.target.value);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const stars = parseInt(e.target.rating.value);
  
      pushReview(movieID, {
            id: uuidv4(),    
            user,
            rating: stars,
            content
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
            <input type='text' value={user} onChange={userHandler} placeholder='  Name'required/>
            <span>&nbsp;Your rating:&nbsp;</span>
            <Stars disabled = {false} stars={0} />
            <br/>
            <textarea 
                type='text' 
                className='form-control' 
                rows="3"
                placeholder='Comment'
                value={content}
                onChange={reviewHandler}
            />
            <br/>
            <button className='btn btn-primary'>Submit</button>
        </form>
        
    );
};