import React from "react";

const Feecard = (props) => {
  console.log(props.data);
  console.log(props.idx);
  return (
    <div className="fee_data">
      <div className="a upper">{props.idx + 1}</div>
      <div className="a cap">{props.data.type}</div>
      <div className="a cap">{props.data.amount}</div>
      <div className="a upper">{props.data.tid}</div>
    </div>
  );
};

export default Feecard;
