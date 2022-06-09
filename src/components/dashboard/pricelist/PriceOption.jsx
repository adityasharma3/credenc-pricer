import React from "react";
import { tempprice } from "./tempprice";
import "./PricingStyles.scss";

const PriceOption = () => {
  return (
    <div className="price-option">
      {tempprice.map((item) => {
        return (
          <div className="price-container" key={Math.random()}>
            <h3>{item.pricingModel}</h3>
            <p>{item.profitModel}</p>
            <p>{item.amount}</p>
            <p>{item.pricingModel}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PriceOption;
