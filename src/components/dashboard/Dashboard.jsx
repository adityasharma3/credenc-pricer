import React, { useState, useEffect } from "react";
import { paymentOptions } from "./paymentoptions";
import "./Dashboard.scss";
import PriceList from "./pricelist/PriceList";
import DashboardModal from "./dashboardmodal/DashboardModal";
import supabase from "./../../config/supabase-client.js";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const product = useSelector((state) => state.product.product.payload);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [prices, setPrices] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("productsList").select(`id`);
      // .eq("id", product.id);

      setPrices(data);

      if (error) {
        alert(error.error_message);
      }
    };

    getData();
  }, [prices]);

  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <div className="payment-options">
          {paymentOptions.map((option) => {
            return (
              <div key={option} className="payment-option">
                <p>{option}</p>
              </div>
            );
          })}
        </div>

        <div className="new-pricing" onClick={() => setModalIsOpen(true)}>
          <p>Add new pricing</p>
        </div>

        {modalIsOpen && (
          <DashboardModal
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
          />
        )}
      </div>
      <PriceList />
    </div>
  );
};

export default Dashboard;
