import React from "react"
import { Card } from "semantic-ui-react"

import MovieCard from "./MovieCard"

export default function MovieCollection({movies}) {

    console.log(movies)
    const mappedMovies = movies.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />
    })

    return (
        <Card.Group itemsPerRow={3} >
            {mappedMovies}
        </Card.Group>
    )
}