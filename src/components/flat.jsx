import React, { Component } from "react";

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, lat, lng } = this.props;
    if (selectFlat) {
      selectFlat(lat, lng);
    }
  };

  render() {
    const {
      imageUrl, price, priceCurrency, name, selectedFlat
    } = this.props;
    return (
      <div
        className={`card${selectedFlat(this.props) ? " active" : ""}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`,
        }}
        onClick={this.handleClick}
        aria-hidden="true"
      >
        <div className="card-category">
          {price}
          {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
