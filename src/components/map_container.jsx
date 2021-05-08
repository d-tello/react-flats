import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import Marker from "./marker";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 11,
      center: { lat: 30.1, lng: 30.1 }
    };
  }

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={this.props.lat} lng={this.props.lng} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
