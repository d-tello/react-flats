import React from "react";
import Flat from "./flat";

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  return (
    <div className="flat-list">
      {flats.map(flat => (
        <Flat
          key={flat.name}
          name={flat.name}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          imageUrl={flat.imageUrl}
          selectFlat={selectFlat}
          selectedFlat={selectedFlat}
          lat={flat.lat}
          lng={flat.lng}
        />
      ))}
    </div>
  );
};

export default FlatList;
