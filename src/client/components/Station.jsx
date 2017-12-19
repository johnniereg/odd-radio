import React, { Component } from 'react';
import { onStationSelect, onInfoSelect } from '../util/ClientFunctions.jsx';

class Station extends Component {

  constructor(props) {
    super(props);
    this.state = {
      details: {
        id: this.props.id,
        name: this.props.name,
        stream: this.props.audioFeed,
        type: this.props.type
      }
    }

    this.onStationSelect = onStationSelect.bind(this);
    // this.props.onInfoSelect = this.props.onInfoSelect.bind(this);
    
  }

  // componentDidMount() {
  //   this.setState({
  //     handleSelectedStation: this.props.handleSelectedStation
  //   })
  // }

  render() {
    return (
      <div>
        <div className={ `container station-container${ this.props.stationType }` }>
          <div className="row station-row border">
            <div className="one-third column station-name center"> { this.props.name } </div>
            <div className="one-third column station-play-button center">
              <i className="fa fa-play card-play-button " aria-hidden="true" onClick={(e) => this.props.handleSelectedStation(this.state.details) }></i>
            </div>
            <div className="one-third column station-info-button center">
              <i className="fa fa-chevron-down card-chevron" aria-hidden="true" onClick={ this.props.onInfoSelect }></i>
            </div>
          </div>
        </div>
        <div className="container info-container hide-class" id={ this.props.name }>
          <div className="row center-align">
            <div className="station-info center">
              <div className="station-branding one-third column"> { this.props.name } </div>
              <div className="two-thirds column info">
                <div>Location: { this.props.city } </div>
                <div>Description: { this.props.description } </div>
                <div>Home Page: <a href={this.props.homePage} target='_blank'> { this.props.homePage } </a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Station;