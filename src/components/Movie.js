import React from "react";

const Movie = (props) => {
  return(
    <div className="movie">
      <p>Chart pos: { props.position + 1 }</p>
      <p>{ props.movie["im:name"].label }</p>
      <img src={ props.movie["im:image"][2].label } alt=""/>
      <p>{ props.movie["im:artist"].label }</p>
      <video controls src={ props.movie.link[1].attributes.href }></video>
    </div>
  )
}

export default Movie
