import React from "react";
import Song from "./Song";
import "./SongList.css"

const SongList = ( { songs } ) => {
  if (!songs) return null;
  const allSongs = songs.map((song, index) => {
    return <Song key={ index } position={ index } song={ song }></Song>
  })
  return(
    <div className="song-list">
      { allSongs }
    </div>
  )
}

export default SongList;
