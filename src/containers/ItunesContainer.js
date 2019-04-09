import React, { Component } from "react";
import SongList from "../components/SongList"

class ItunesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }
  render(){
    return (
      <div className="itunes-container">
        <p>Itunes Container</p>
        <SongList></SongList>
      </div>
    )
  }
}

export default ItunesContainer;
