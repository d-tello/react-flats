import React, { Component } from "react";

class Flat extends Component {
  handleClick = () => {
    if (this.props.selectFlat) {
      this.props.selectFlat(this.props.lat, this.props.lng);
    }
  };

  render() {
    const { imageUrl, price, priceCurrency, name } = this.props;
    
    return (
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`,
        }}
        onClick={this.handleClick}
      >
        <div className="card-category">
          {price} {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
