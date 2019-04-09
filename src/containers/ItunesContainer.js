import React, { Component } from "react";
import SongList from "../components/SongList"

class ItunesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      movies: []
    }
    this.fetchContent = this.fetchContent.bind(this)
  }

  componentDidMount(){
    this.fetchContent("topsongs")
  }

  fetchContent(type){
    fetch("https://itunes.apple.com/gb/rss/" + type + "/limit=20/json")
    .then(res => res.json())
    .then(content => this.setState({ songs: content.feed.entry }))
  }

  render(){
    return (
      <div className="itunes-container">
        <h1>Top 20 iTunes UK</h1>
        <SongList songs={ this.state.songs }></SongList>
      </div>
    )
  }
}

export default ItunesContainer;
