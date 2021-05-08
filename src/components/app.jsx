import React, { Component } from "react";

import FlatList from "./flat_list";
import flats from "../../data/flats";
import MapContainer from "./map_container";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      lat: null,
      lng: null,
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      lat,
      lng,
    });
  };

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} />
        <MapContainer lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}

export default App;
