import React, { Component } from "react";
import SongList from "../components/SongList"
import MovieList from "../components/MovieList"

class ItunesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      movies: []
    }
    this.fetchSongs = this.fetchSongs.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
  }

  componentDidMount(){
    this.fetchSongs()
  }

  fetchSongs(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(res => res.json())
    .then(content => this.setState({ songs: content.feed.entry, movies: [] }))
  }

  fetchMovies(){
    fetch("https://itunes.apple.com/gb/rss/topmovies/limit=20/json")
    .then(res => res.json())
    .then(content => this.setState({ movies: content.feed.entry, songs: [] }))
  }

  render(){
    return (
      <div className="itunes-container">
        <h1>Top 20 iTunes UK</h1>
        <div className="button" onClick={this.fetchMovies}>Movies</div>
        <div className="button" onClick={this.fetchSongs}>Music</div>
        <SongList songs={ this.state.songs }></SongList>
        <MovieList movies= { this.state.movies }></MovieList>

      </div>
    )
  }
}

export default ItunesContainer;
