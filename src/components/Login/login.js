import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./login.css";
import Pagebanner from "../comman/pagebanner";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import swal from "sweetalert";
import { useAuthContextProvider } from "../../Context/Authcontext";

const Login = () => {
  const user = useAuthContextProvider();
  const [logdata, setLogdata] = useState({ name: "", password: "" });
  const navigate = useNavigate();
  const checkLogin = () => {
    const token = localStorage.getItem("token");

    if (token && token !== undefined) {
      navigate("/dashboard/admission");
    }
  };

  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setLogdata({ ...logdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", logdata, {
        headers: {
          "cotent-Type": "application/json",
        },
      });
      const res = response?.data;
      console.log(res);
      if (res.code === 4000) {
        const acesstoken = response?.data?.access_token;
        localStorage.setItem("token", acesstoken);
        swal("Welcome", " Sucessfully Loged in", "success");
        navigate("/dashboard/admission");
      } else {
        swal("Invalid Details", "Enter Correct details", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkLogin();
  });
  return (
    <>
      <div className="login_body">
        <div className="login_container">
          <Pagebanner head="login" />
          <form className="login_form">
            <TextField
              fullWidth
              name="name"
              label="Username"
              value={logdata.name}
              onChange={handleChangelogin}
            />
            <TextField
              fullWidth
              type={"password"}
              name="password"
              label="Password"
              value={logdata.password}
              onChange={handleChangelogin}
            />
            <Button variant="contained" onClick={handleSubmit}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
