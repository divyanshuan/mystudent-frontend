import React, { useState, useEffect } from "react";
import Pagebanner from "../comman/pagebanner";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuthContextProvider } from "../../Context/Authcontext";

import "./students.css";

import Studentcard from "./studentcard";
import axios from "../../api/axios";

const Students = () => {
  const user = useAuthContextProvider();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("student/getall", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        let data = res?.data.data;
        data = data.filter((element) => {
          return element.added_by === user.userdata.location;
        });
        setData(data);
      })
      .catch((error) => {
        if (error?.response?.status === 401) {
          swal("Login again ", "error happend", "error");
          localStorage.removeItem("token");
          navigate("/");
        }
      });
  }, [user.userdata.location]);
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
          {data != null ? (
            data.map((detail) => {
              return <Studentcard key={detail.id} data={detail} />;
            })
          ) : (
            <h1>No Data</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
