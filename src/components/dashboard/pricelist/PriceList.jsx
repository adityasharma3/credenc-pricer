import React from "react";
import PriceOption from "./PriceOption";
import "./PricingStyles.scss";

const PriceList = ({ data }) => {
  return (
    <div className="price-list">
      <PriceOption data={data} />
    </div>
  );
};

export default PriceList;
