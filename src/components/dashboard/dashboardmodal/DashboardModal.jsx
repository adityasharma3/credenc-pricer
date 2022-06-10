import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import supabase from "../../../config/supabase-client";
import "./modalstyle.scss";
import { useSelector } from "react-redux";

const DashboardModal = ({ open, onClose }) => {
  //   const [prices, setPrices] = useState([]);
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");

  const product = useSelector((state) => state.product.product.payload);
  console.log(product);

  //   useEffect(() => {
  //     const getData = async () => {
  //       const { data, error } = await supabase
  //         .from("productsList")
  //         .eq("id", product.id);

  //       setPrices(data);

  //       if (error) {
  //         alert(error.error_message);
  //       }
  //     };

  //     getData();
  //   }, [prices]);

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
          { pricingModel: "Subscription", status: "active", amount: amount },
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
      <div className="modal-content" style={MODAL_STYLES}>
        <h3>Add new pricing model</h3>

        <form action="">
          <div className="payment-mode-select">
            <button>Subscription</button>
            <button>Lumpsum</button>
            <button>EMI</button>
          </div>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />

          <div className="payment-time-select">
            <button>Monthly</button>
            <button>Yearly</button>
          </div>

          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Discount(₹)"
          />
          <button type="submit" onClick={onSaveSubmission}>
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
