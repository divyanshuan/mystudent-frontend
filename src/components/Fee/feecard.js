import React from "react";

const Feecard = (props) => {
  return (
    <div className="fee_data">
      <div className="a upper">{props.data.id}</div>
      <div className="a cap">{props.data.type}</div>
      <div className="a cap">{props.data.amount}</div>
      <div className="a upper">{props.data.tid}</div>
    </div>
  );
};

export default Feecard;
