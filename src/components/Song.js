import React from "react";
import "./Song.css"

const Song = (props) => {
  return(
    <div className="song">
      <p>Position: { props.position + 1 }</p>
      <p>{ props.song["im:name"].label }</p>
      <img src={ props.song["im:image"][2].label } alt=""/>
      <p>{ props.song["im:artist"].label }</p>
      <audio controls="play" src={ props.song.link[1].attributes.href }></audio>
    </div>
  )
}

export default Song
