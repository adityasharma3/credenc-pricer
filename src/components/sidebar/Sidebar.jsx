import React, { useEffect, useState } from "react";
import supabase from "../../config/supabase-client";
import SidebarModal from "./SidebarModal";

import { useDispatch } from "react-redux";

import "./Sidebar.scss";
import { productSliceActions } from "../../store/productSlice";
import { CaretRight } from "phosphor-react";

const Sidebar = () => {
  const [products, setProducts] = useState([]);
  const [clickedProduct, setClickedProduct] = useState("Sofa");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("products-list").select("*");
      setProducts(data);

      if (error) {
        alert(error.error_message);
      }
    };

    getData();
  }, [products]);

  return (
    <div className="sidebar">
      <div className="sidebar--categories">
        {products.map((b) => {
          return (
            <div
              className="sidebar--category"
              id={b.id}
              key={b.id}
              onClick={(e) => {
                e.stopPropagation();
                setClickedProduct(b.productName);
                dispatch(productSliceActions.newProduct(b.productName));
              }}
            >
              <p>{b.productName}</p>
              <CaretRight />
            </div>
          );
        })}
      </div>

      <div className="add-product" onClick={() => setModalIsOpen(true)}>
        <p>Add new product</p>
      </div>

      {modalIsOpen && (
        <SidebarModal
          open={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
