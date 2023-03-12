import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./dashboard.css";
import logo from "../../assets/logo.jpeg";
import { useAuthContextProvider } from "../../Context/Authcontext";
import axios from "../../api/axios";
import swal from "sweetalert";

const Dashboard = () => {
  const user = useAuthContextProvider();
  const navigate = useNavigate();
  const getUser = (token) => {
    axios
      .get(`/user/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        user.updateUser(res?.data);
      })
      .catch((eror) => {
        if (eror?.response?.status === 401) {
          swal("Error happend", "", "error");
          localStorage.removeItem("token");
          navigate("/");
        }
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    getUser(token);
  }, []);
  return (
    <div>
      <div className="main_bord">
        <div className="nav_section">
          <div className="profile_sec">
            <div className="profile">
              <img height={60} width={60} src={logo} alt="pr" />
              <div className="user">
                <p>{user.userdata.name}</p>
                <p>{user.userdata.location}</p>
              </div>
            </div>
            <div className="button_sec">
              <NavLink to="/dashboard/admission" className="btns">
                <PersonAddAlt1Icon fontSize="large" />
                <p>New Admisssion </p>
              </NavLink>
              <NavLink to="/dashboard/students" className="btns">
                <SearchOutlinedIcon fontSize="large" />
                <p>old Student </p>
              </NavLink>
              <NavLink to="/dashboard/addfee" className="btns">
                <CurrencyRupeeIcon fontSize="large" />
                <p>Add Fee </p>
              </NavLink>
              <button
                className="btns logbtns"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="main_section">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
