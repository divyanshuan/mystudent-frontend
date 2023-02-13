import React, { useState, useEffect } from "react";
import Pagebanner from "../comman/pagebanner";
import "./students.css";

import Studentcard from "./studentcard";
import axios from "../../api/axios";

const Students = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("student/getall")
      .then((res) => setData(res?.data.data))
      .catch((eror) => console.log(eror));
  }, []);
  return (
    <div className="Student_detail">
      <Pagebanner head="Student" />

      <div className="table_main">
        <div className="table_data_head">
          <h3>Roll No</h3>
          <h3>Name</h3>
          <h3>Mobile</h3>
          <h3>Course</h3>
          <h3>Details</h3>
        </div>
        <div className="table_view">
          {data.map((detail) => {
            return <Studentcard key={detail.id} data={detail} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Students;
