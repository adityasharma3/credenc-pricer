import React from "react";
import { paymentOptions } from "./paymentoptions";
import "./Dashboard.scss";
import PriceList from "./pricelist/PriceList";

const Dashboard = ({ category }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <div className="payment-options">
          {paymentOptions.map((option) => {
            return (
              <div className="payment-option" key={Math.random()}>
                <p>{option}</p>
              </div>
            );
          })}
        </div>

        <div className="new-pricing">
          <p>Add new pricing</p>
        </div>
      </div>
      <PriceList />
    </div>
  );
};

export default Dashboard;
