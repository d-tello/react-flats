import React, { Component } from "react";

import FlatList from "./flat_list";
import flats from "../../data/flats";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: flats
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <div className="map-container"></div>
      </div>
    );
  }
}

export default App;
