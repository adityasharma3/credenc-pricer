import React from "react";
import { paymentOptions } from "./paymentoptions";
import "./Dashboard.scss";
import PriceList from "./pricelist/PriceList";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const pricingPlans = useSelector((state) => state.product.product.payload);
  console.log(pricingPlans.priceList);

  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <div className="payment-options">
          {/* {pricingPlans.map((option) => {
            return (
              <div className="payment-option" key={Math.random()}>
                <p>hi</p>
              </div>
            );
          })} */}
          {/* <div className="payment-option" key={pricingPlans.id}>
            <p>{pricingPlans.productName}</p>
          </div> */}
        </div>

        <div className="new-pricing">
          <p>Add new pricing</p>
        </div>
      </div>
      <PriceList data={pricingPlans.priceList} />
    </div>
  );
};

export default Dashboard;

///*

// {
//   pricingPlans.map((option) => {
//     return (
//       <div className="payment-option" key={Math.random()}>
//         {/* <p>{option.productName}</p> */}
//         <p>hi</p>
//       </div>
//     );
//   });
// }

////*
