import React from "react";
import Flat from "./flat";

const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      {flats.map((flat) => (
        <Flat
          id={flat.name}
          name={flat.name}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          imageUrl={flat.imageUrl}
        />
      ))}
    </div>
  );
};

export default FlatList;
