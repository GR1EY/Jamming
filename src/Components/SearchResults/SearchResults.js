import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import SearchResults.css from 'SearchResults.css';

class SearchResults extends React.Component{
  render() {
    return(
      <div className="SearchResults" searchResults={this.state.searchResults}>
        <h2>Results</h2>
        <onAdd={this.props.onAdd}>
      </div>
    );
  }
}

export default SearchResults;
