import React, {useState} from 'react'
import Movie from './Movie'




//a container for all the Movie components and their data.


export default function MovieList({movies}, {reviews}) {
    

    return (
        <div>
            <Movie movies={movies} />
        </div>
    );
};