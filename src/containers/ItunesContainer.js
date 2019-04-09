import React, { Component } from "react";

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
      </div>
    )
  }
}

export default ItunesContainer;
