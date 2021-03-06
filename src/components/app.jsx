import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// Data
import flats from "../../data/flats";

import FlatList from "./flat_list";
import Marker from "./marker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      center: { lat: flats[0].lat, lng: flats[0].lng },
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({
      lat,
      lng,
      center: { lat, lng },
    });
  };

  selectedFlat = (flat) => {
    const { lat, lng } = this.state;
    return flat.lat === lat && flat.lng === lng;
  };

  render() {
    const GoogleMapsApiKey = process.env.GOOGLE_MAP_API_KEY;
    const { lat, lng, center } = this.state;
    return (
      <div>
        <FlatList
          flats={flats}
          selectFlat={this.selectFlat}
          selectedFlat={this.selectedFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: GoogleMapsApiKey,
              language: "en",
            }}
            center={center}
            defaultZoom={12}
          >
            <Marker lat={lat} lng={lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
