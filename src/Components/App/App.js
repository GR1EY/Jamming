import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const playlistName = 'New Playlist';
const playlistTracks = ['name', 'artist', 'album', 'id'];
const addTrack = if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
}

this.addTrack = this.addTrack.bind(this);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {searchResults: ['name', 'artist', 'album', 'id']};
  }

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <!-- Add a SearchBar component -->
    <div className="App-playlist">
      <onAdd={this.state.addTrack}>
      <playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}>
    </div>
  </div>
</div>
    );
  }
}

export default App;
