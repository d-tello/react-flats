import React, { Component } from "react";
import GoogleMapReact from "google-map-react";


import FlatList from "./flat_list";
import flats from "../../data/flats";
import Marker from "./marker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      lat: null,
      lng: null,
      center: { lat: 30, lng: 30 }
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      lat,
      lng,
      center: { lat, lng }
    });
  };

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.state.center} defaultZoom={12}>
            <Marker
              lat={this.state.lat}
              lng={this.state.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
