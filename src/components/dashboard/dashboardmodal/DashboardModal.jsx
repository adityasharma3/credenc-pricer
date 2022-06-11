import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import supabase from "../../../config/supabase-client";
import "./modalstyle.scss";
import { useSelector } from "react-redux";
import "./modalstyle.scss";

const DashboardModal = ({ open, onClose }) => {
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [paymentMode, setPaymentMode] = useState("Subscription");
  const [paymentTime, setPaymentTime] = useState("Monthly");

  const product = useSelector((state) => state.product.product.payload);

  const onSaveSubmission = (e) => {
    e.preventDefault();
    insertToDB();
    onClose();
  };

  const insertToDB = async () => {
    const { data, error } = await supabase
      .from("productsList")
      .update({
        priceList: [
          {
            pricingModel: paymentMode,
            status: "active",
            amount: amount,
          },
        ],
      })
      .eq("id", product.id);

    console.log(data);
    if (error) console.log(error.message);
  };

  const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000,
    width: "45%",
  };

  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000,
    backdropFilter: "blur(8px)",
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h3>Add new pricing model</h3>

        <form>
          <div className="payment-mode-select">
            <label>Select payment mode</label>
            <select
              name="payemnt-mode"
              id="payment-mode"
              value={paymentMode}
              onChange={(e) => {
                setPaymentMode(e.target.value);
              }}
            >
              <option value="Subscription">Subscription</option>
              <option value="Lumpsum">Lumpsum</option>
              <option value="EMI">Emi</option>
            </select>
          </div>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />

          <div className="payment-time-select">
            <label htmlFor="">Select payment Duration</label>
            <select
              name="payemnt-duration"
              id="payment-duration"
              value={paymentTime}
              onChange={(e) => {
                setPaymentTime(e.target.value);
              }}
            >
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>

          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Discount(₹)"
          />
          <button
            className="submit-btn"
            type="submit"
            onClick={onSaveSubmission}
          >
            Save
          </button>
        </form>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default DashboardModal;
