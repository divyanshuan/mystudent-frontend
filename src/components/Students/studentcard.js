import React from "react";
import { Link } from "react-router-dom";
import "./students.css";
import { Button } from "@mui/material";

const Studentcard = (props) => {
  const fullname = `${props.data.firstname}  ${props.data.lastname}`;

  return (
    <div className="table_data">
      <div className="a upper">{props.data.roll}</div>
      <div className="a cap">{fullname}</div>
      <div className="a cap">{props.data.mobile}</div>
      <div className="a upper">{props.data.course}</div>
      <div>
        <Link to={`/dashboard/detail/${props.data.id}`}>
          <Button className="btn "> detail</Button>
        </Link>
      </div>
    </div>
  );
};

export default Studentcard;
