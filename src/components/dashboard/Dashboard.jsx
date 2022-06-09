import React from "react";
import { paymentOptions } from "./paymentoptions";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="payment-options">
        {paymentOptions.map((option) => {
          return (
            <div className="payment-option">
              <p>{option}</p>
            </div>
          );
        })}
      </div>

      <div className="new-pricing">
        <p>Add new pricing</p>
      </div>
    </div>
  );
};

export default Dashboard;
