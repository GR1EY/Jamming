import React from 'react';
import Track from '../Track/Track.js';
import TrackList.css from 'TrackList.css';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList" track={this.state.tracks} onAdd={this.props.onAdd}>
    this.props.tracks.map(track.id);
</div>
    );
  }
}

export default TrackList;
