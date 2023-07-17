import React from 'react'
import Movie from './Movie'




//a container for all the Movie components and their data.


export default function MovieList({movies, pushReview}) {
    

    return (
        <div className='movieContainer row'>
            {
                movies.map (movie => {
                    return (
                        <div className='movie col-lg' key={movie.id}>    
                            <Movie movie = {movie} pushReview = {pushReview}/>
                        </div>
                    );
                })
            }
        </div>
    );
};