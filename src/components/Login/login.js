import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./login.css";
import Pagebanner from "../comman/pagebanner";

const Login = () => {
  const [logdata, setLogdata] = useState({ username: "", password: "" });

  const handleChangelogin = (e) => {
    const { name, value } = e.target;
    setLogdata({ ...logdata, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(LoginURL, logdata, {
    //     headers: {
    //       "cotent-Type": "application/json",
    //     },
    //   });
    //   const res = response?.data;

    //   if (res.code === 4000) {
    //     const acesstoken = response?.data?.access_token;
    //     localStorage.setItem("access-token", acesstoken);
    //     swal("Welcome", " Sucessfully Loged in", "success");
    //     navigate("/dashboard/admission");
    //   } else {
    //     swal("Invalid Details", "Enter Correct details", "error");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <>
      <div className="login_body">
        <div className="login_container">
          <Pagebanner head="login" />
          <form className="login_form">
            <TextField
              fullWidth
              name="username"
              label="Username"
              value={logdata.username}
              onChange={handleChangelogin}
            />
            <TextField
              fullWidth
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
