import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { Armchair, CaretRight } from "phosphor-react";
import { productList } from "../../data";

import supabase from "../../config/supabase-client";

const Sidebar = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("products-list").select("*");
      setProducts(data);

      if (error) {
        alert(error.error_message);
      }
    };

    getData();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar--categories">
        {products.map((b) => {
          return (
            <div className="sidebar--category" id={b.id} key={b.id}>
              <p>{b.productName}</p>
              <CaretRight />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
