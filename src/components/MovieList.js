import React from "react";
import Movie from "./Movie"

const MovieList = ( { movies } ) => {
  if (!movies) return null;
  const allMovies = movies.map((movie, index) => {
    return <Movie key={ index } position={ index } movie={ movie }></Movie>
  })
  return(
    <div className="movie-list">
      { allMovies }
    </div>
  )
}

export default MovieList;
