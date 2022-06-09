import React, { useEffect } from "react";
import "./Header.scss";
import { BellSimple } from "phosphor-react";

const Header = () => {
  //   useEffect(() => {
  //     fetch("https://product-demo-credenc.herokuapp.com/logo/")
  //       .then((res) => res.json())
  //       .then((x) => console.log(x));
  //   }, []);

  return (
    <>
      <div className="header">
        <div className="header--left-section">
          <p>Credenc logo</p>
          <h3>CREDENC PRICER</h3>
        </div>

        <div className="header--right-section">
          <BellSimple size={28} />
          <div className="header--right-section account">
            <p>SK</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
