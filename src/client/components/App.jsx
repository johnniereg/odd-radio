import React, {Component} from 'react';
import * as utils from '../util/ClientFunctions.jsx';

import AudioPlayer from './AudioPlayer.jsx';
import StationList from './StationList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.colors = ['FF81AB', 'A07BE8', '66CBFF', '5CE886', 'F6FF71'];
    this.state = {
      scrollPercent: 0,
      color: '1',
      stations: [],
      selectedStation: {
        id: "",
        name: "",
        stream: "",
        type: ""
      },
      player: {
        volume: 1,
        isPlaying: false,
        isPaused: true,
        isLoading: false
      }
    },

    this.handleSelectedStation = utils.handleSelectedStation.bind(this);

    
    this.handlePlayState = utils.handlePlayState.bind(this);
    this.seekStation = utils.seekStation.bind(this);
    this.generateRandomStationId = utils.generateRandomStationId.bind(this);
    this.loadStations = utils.loadStations.bind(this);
    this.scrollListener = utils.scrollListener.bind(this);
    this.findColor = utils.findColor.bind(this);
    this.setStateSelectedStation = utils.setStateSelectedStation.bind(this);
  }

  componentDidMount() {
    this.loadStations();
    this.scrollListener();
    this.setStateSelectedStation();
  }

  render() {
    return (
      <div className="app-container" style={{ backgroundColor: this.findColor() }}>
        <header>
        <div className="container title-container">
            <div className="row title-row border">
              <div className="six columns description">
                <h3>A curated collection of the </h3>
                <h3>odd sounds </h3>
                <h3>of Canadian college </h3>
                <h3>radio.</h3>
              </div>
              <div className="three columns brand-name">
                <h1>oddrad.io</h1>
              </div>
            </div>
          </div>


        </header>
          <StationList stations={this.state.stations} 
            handleSelectedStation={ this.handleSelectedStation } 
            onStationSelect={ utils.onStationSelect }
            onInfoSelect={ utils.onInfoSelect } 
          />
        <footer>
           <AudioPlayer stationFeed={ this.state.selectedStation } seekStation={ this.seekStation } />
        </footer>
      </div>
    );
  }
}
export default App;
