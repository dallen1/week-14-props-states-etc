import React from 'react'
import Movie from './Movie'




//a container for all the Movie components and their data.


export default function MovieList({movies, pushReview}) {
    

    return (
        <div className='movieContainer'>
            {
                movies.map (movie => {
                    return (
                        <div className='movie' key={movie.id}>    
                            <Movie movie = {movie} pushReview = {pushReview}/>
                        </div>
                    );
                })
            }
        </div>
    );
};