import React, { useState, useEffect } from "react"

import MovieCollection from "./MovieCollection"
import AddNewMovie from "./AddNewMovie"


export default function Home() {

  const [movies, setMovies] = useState([])

  const addNewMovie = newMovie => {
    const newMovieList = [...movies, newMovie];
    setMovies(newMovieList);
  }

  useEffect(() => {
      fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => {
        setMovies(data)
      })
    }, [])

  return (
      <div>
        <h2>All Movies</h2>
        <MovieCollection movies={movies} />
        <AddNewMovie addNewMovie={addNewMovie}/>
      </div>
  )
}