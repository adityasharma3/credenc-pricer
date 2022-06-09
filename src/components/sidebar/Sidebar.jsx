import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { Armchair, CaretRight } from "phosphor-react";
import { productList } from "../../data";

import supabase from "../../config/supabase-client";
import SidebarModal from "./SidebarModal";

const Sidebar = () => {
  const [products, setProducts] = useState([]);
  const [clickedProduct, setClickedProduct] = useState("Sofa");
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
                // console.log(b.productName);
                setClickedProduct(b.productName);
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
