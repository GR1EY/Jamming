import React from 'react';
import Track.css from 'Track.class';

class Track extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }
  render() {
    return(
      <div className="Track" tracks{this.props.searchResults} onAdd={this.props.track}>
        <div className="Track-information">
          <h3><this.props.track.name;></h3>
          <p><this.props.track.artist;> | <this.props.track.album;></p>
        </div>
        <a className="Track-action"><onClick={this.addTrack} or - will go here --></a>
      </div>
    );
  }
}

class renderAction extends React.Component {
  render(){
    return(
      if (isRemoval === true) {
        console.log('-');
      }else{
        console.log('+');
      }
    )
  }
}

export default Track;
