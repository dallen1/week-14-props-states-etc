import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa'

//borrowed from instructor example
export default function Stars({stars, disabled}) {

  const [rating, setRating] = useState(stars);

  return (
    <div className="starRating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i} >
          <input 
             type="radio" 
             name="rating" 
             value={ratingValue} 
             disabled = {disabled}
             onClick={() => setRating(ratingValue)}
          />
           <FaStar 
             size = {15} 
             color={ratingValue <= (rating) ? 'FFA500' : '#e4e5e9'} 
             className="star-icon" 
           />
         </label>
        );
      })}
    </div>
  );
};

