import React, { useEffect, useState } from "react";
import "./PricingStyles.scss";
import { useSelector } from "react-redux";

const PriceOption = ({ data }) => {
  // const [initialCost, setInitalCost] = useState("");

  // setInitalCost(pricingPlans.manufacturingCost);

  const pricingPlans = useSelector((state) => state.product.product.payload);

  // console.log(pricingPlans);

  // useEffect(() => {
  //   setInitalCost(pricingPlans.manufacturingCost);
  // }, []);

  if (
    pricingPlans == null ||
    pricingPlans == undefined ||
    pricingPlans.priceList == undefined ||
    pricingPlans.priceList == null
  ) {
    return (
      <h2
        style={{
          margin: "auto",
        }}
      >
        No Pricing Models available.
      </h2>
    );
  }

  return (
    <div className="price-option">
      {pricingPlans.priceList.map((item) => {
        return (
          <div className="price-container" key={Math.random()}>
            <h3>{item.pricingModel}</h3>
            {/* <p>{(item.amount - initialCost / initialCost) * 100 + "%"}</p> */}
            <p>{item.amount}</p>
            <p>{item.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PriceOption;
