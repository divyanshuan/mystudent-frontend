import "./pagebanner.css";

import React from "react";

const Pagebanner = (props) => {
  return (
    <div className="page_container">
      <h1>{props.head}</h1>
    </div>
  );
};

export default Pagebanner;
