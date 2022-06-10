import React from "react";
import { tempprice } from "./tempprice";
import "./PricingStyles.scss";

const PriceOption = ({ data }) => {
  if (data == null) {
    return <h2>No Pricing Models available.</h2>;
  }
  return (
    <div className="price-option">
      {data.map((item) => {
        return (
          <div className="price-container" key={Math.random()}>
            <h3>{item.pricingModel}</h3>
            {/* <p>{item.profitModel}</p> */}
            <p>{item.amount}</p>
            <p>{item.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PriceOption;
