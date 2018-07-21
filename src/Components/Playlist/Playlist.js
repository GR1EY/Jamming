import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import Playlist.css from 'Playlist.css';

class Playlist extends React.Component {
  render() {
    return(
      <div className="Playlist">
        <input value={"New Playlist"}/>
        <tracks={this.props.playlistTracks}>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
