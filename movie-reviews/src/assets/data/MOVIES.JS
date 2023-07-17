import { v4 as uuidv4 } from '../../../node_modules/uuid';

//all info from wikipedia
export const MOVIES = [

    {id: uuidv4(),
        title: "Beetlejuice",
        image:"https://upload.wikimedia.org/wikipedia/en/7/76/Beetlejuice_%281988_film_poster%29.png",
        synopsis: "Beetlejuice is a 1988 American fantasy horror comedy film...",
        reviews: [
        {
            user: "Max", 
            rating: 4,
            content: "cool"
        },
        {
            user: "Shelly", 
            rating: 5,
            content: "liked it"
        },
        {
            user: "Drew",
            rating: 3,
            content: "meh"
        }
        ]
    },
    {
        id: uuidv4(),
        title: "Mad Max", 
        image:"https://upload.wikimedia.org/wikipedia/en/5/5a/MadMazAus.jpg", 
        synopsis: "Mad Max is a 1979 Australian dystopian action film...", 
        reviews: [
            {
                user: "Mike", 
                rating: 5,
                content: "amazing"
            },
            {
                user: "Lisa", 
                rating: 2,
                content: "🥱"
            },
            {
                user: "Diana",
                rating: 3,
                content: "old"
            }
        ]
    },        
    {
        id: uuidv4(), 
        title: "Repo Man", 
        image:"https://upload.wikimedia.org/wikipedia/en/4/46/Repo-Man-Poster.jpg", 
        synopsis: "Repo Man is a 1984 American science fiction black comedy film...", 
        reviews: [
            {
                user: "Max", 
                rating: 4,
                content: "still holds up"
            },
            {
                user: "Trent", 
                rating: 5,
                content: "classic"
            },
            {
                user: "Diana",
                rating: 5,
                content: "never gets old"
            }
        ]
    }  
];