import React, {useState} from 'react'
import Movie from './Movie'


//a container for all the Movie components and their data.
const MovieList = (movies) => {

    return (
        <div>
            <Movie {...movies}/>
        </div>
    );
};