

const calcMovieRating = (reviews) => {
    let ratings = 0;
  
    reviews.forEach(review => {
      ratings += review.rating;
    })
  
    return (ratings / reviews.length).toFixed(2);
  
  }
  
  export {calcMovieRating}