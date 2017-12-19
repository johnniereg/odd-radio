import React, {Component} from 'react';
import Station from './Station.jsx';

class StationList extends Component {
  render() {
    const station = this.props.stations.map((post, index) => {
      if (index % 2 === 0) {
        return <Station
          key={ post.id }
          id={ post.id }
          name={ post.name }
          description={ post.description }
          audioFeed={ post.audio_feed }
          type={ post.stream_type }
          homePage={ post.home_page }
          city={ post.city }
          stationType={1}
          handleSelectedStation={ this.props.handleSelectedStation }
          onStationSelect={ this.props.onStationSelect }
          onInfoSelect={ this.props.onInfoSelect }
           />
      } else {
        return <Station
          key={ post.id }
          id={ post.id }
          name={ post.name }
          description={ post.description }
          audioFeed={ post.audio_feed }
          type={ post.stream_type }
          homePage={ post.home_page }
          city={ post.city }
          stationType={2}
          handleSelectedStation={ this.props.handleSelectedStation }
          onStationSelect={this.props.onStationSelect}
          onInfoSelect={this.props.onInfoSelect}          
           />
      }
    });

    return (
      <section className="station-list-container">
        { station }
      </section>
    )
  }
}
export default StationList;