import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Sidebar.scss";
import supabase from "../../config/supabase-client";

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

export default function SidebarModal({ open, onClose }) {
  const [product, setProduct] = useState("");
  const [cost, setCost] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSaveSubmission = (e) => {
    e.preventDefault();

    uploadToDB();
    onClose();
  };

  const uploadToDB = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from("productsList").insert([
      {
        productName: product,
        manufacturingCost: cost,
        priceList: null,
      },
    ]);

    {
      error && alert(error.message);
    }

    console.log(data);

    setIsLoading(false);
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    !isLoading && (
      <>
        <div className="modal-overlay" style={OVERLAY_STYLES} />
        <div className="modal-content" style={MODAL_STYLES}>
          <h3>Create New Product</h3>
          <form action="">
            <input
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Product name"
            />
            <input
              type="text"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="Manufacturing cost"
            />
            <button type="submit" onClick={onSaveSubmission}>
              Save
            </button>
          </form>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
          {/* {children} */}
        </div>
      </>
    ),
    document.getElementById("portal")
  );
}

// export default SidebarModal;
