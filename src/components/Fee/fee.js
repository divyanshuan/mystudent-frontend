import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fee.css";
import axios from "../../api/axios";
import Pagebanner from "../comman/pagebanner";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { feetype } from "../Addmission/data";
import Feecard from "./feecard";
import swal from "sweetalert";

const Fee = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const fields = {
    variant: "outlined",
    fullWidth: true,
  };
  const initialValues = {
    roll: "",
    type: "",
    amount: "",
    tid: "",
  };
  const [roll, setRoll] = useState("");
  const [data, setData] = useState([]);
  const [fees, setFees] = useState([]);
  const [values, setValues] = useState(initialValues);
  const [hide, setHide] = useState(false);

  const handlechange = (e) => {
    setRoll(e.target.value);
  };
  const handleValue = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const getdata = async (e) => {
    e.preventDefault();
    try {
      axios
        .get(`/student/getroll/${roll}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setData(res?.data.data);
          setFees(res?.data.data.fees);
          setHide(true);
        })
        .catch((error) => {
          if (error?.response?.status === 401) {
            swal("Login again ", "error happend", "error");
            localStorage.removeItem("token");
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const addFee = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const allvalues = {
      ...values,
      id: data.id,
    };
    for (let value in allvalues) {
      formData.append(value, allvalues[value]);
    }
    try {
      const response = await axios.post("student/addfee", formData, {
        headers: {
          "cotent-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      swal(response.data.message, "", "sucess");
      setValues(initialValues);
      getdata(e);
    } catch (error) {
      if (error?.response?.status === 401) {
        swal("Login again ", "error happend", "error");
        localStorage.removeItem("token");
        navigate("/");
      }
    }
  };
  return (
    <div className="Fee">
      <Pagebanner head="Add Fee" />
      <div>
        <form className="search_form">
          <input
            type="text"
            className="search_input"
            value={roll}
            onChange={handlechange}
          />
          <IconButton aria-label="delete" size="large" onClick={getdata}>
            <SearchIcon fontSize="inherit" />
          </IconButton>
        </form>
      </div>
      <div className="main_fee">
        {hide ? (
          <>
            <div className="add_fee">
              <div className="tablegrid">
                <p>Name</p>
                <p>{`${data.firstname} ${data.lastname}`} </p>
              </div>
              <div className="lastfees">
                {fees.map((detail, idx) => {
                  return <Feecard key={detail.id} data={detail} idx={idx} />;
                })}
              </div>
              <div>
                <Grid
                  container
                  pt={4}
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={3}>
                    <FormControl fullWidth>
                      <InputLabel id="feetype">Timing</InputLabel>
                      <Select
                        labelId="feetype"
                        name="type"
                        value={values.type}
                        label="Fee Type"
                        onChange={handleValue}
                      >
                        {feetype.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      name="amount"
                      label="Amount"
                      {...fields}
                      onChange={handleValue}
                      value={values.amount}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      name="tid"
                      label="Transction id"
                      {...fields}
                      onChange={handleValue}
                      value={values.tid}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Button variant="contained" onClick={addFee}>
                      Add Fee
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </>
        ) : (
          <h1>Enter roll number </h1>
        )}
      </div>
    </div>
  );
};

export default Fee;
