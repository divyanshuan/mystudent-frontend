import React, { useState } from "react";
import "./addmission.css";
import { mycourses, cateogry, batch, timing } from "./data";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import Pagebanner from "../comman/pagebanner";

import axios from "../../api/axios";
import { Validation } from "../Validation/validate";
import swal from "sweetalert";

const Addmission = () => {
  const fields = {
    variant: "outlined",
    fullWidth: true,
  };

  const initialValues = {
    added_by: "",
    form_no: "",
    firstname: "",
    lastname: "",
    fathersname: "",
    mothersname: "",
    mobile: "",
    email: "",
    gender: "",
    aadhar: "",
    dob: "",
    category: "",
    timing: "",
    course: "",
    batch: "",
    address: "",
    district: "",
    state: "",
    pin: "",
    matric_m: "",
    matric_y: "",
    other_m: "",
    other_y: "",
  };
  const [values, setValues] = useState(initialValues);
  const [picture, setPicture] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onFileUpload = (e) => {
    let img_file = e.target.files[0];
    setPicture(img_file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allvalues = {
      ...values,
      added_by: "Tarwan",
      photo: picture,
    };

    const arr = Validation(allvalues);
    if (!arr.state) {
      swal(arr.msg, "", "error");
    } else {
      const formData = new FormData();
      for (let value in allvalues) {
        formData.append(value, allvalues[value]);
      }
      try {
        const response = await axios.post("student/add", formData, {
          headers: {
            "cotent-Type": "application/json",
          },
        });
        console.log(JSON.stringify(response?.data));
        setValues(initialValues);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="Addmission">
      <div className="container">
        <Pagebanner head="Addmission" />
        <form className="addmision_form">
          <Grid
            container
            pt={4}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <TextField
                name="form_no"
                label="Form No."
                {...fields}
                onChange={handleChange}
                value={values.form_no}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                name="firstname"
                label="First Name"
                {...fields}
                onChange={handleChange}
                value={values.firstname}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="lastname"
                label="Last Name"
                {...fields}
                onChange={handleChange}
                value={values.lastname}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="fathersname"
                label="Father's Name"
                {...fields}
                onChange={handleChange}
                value={values.fathersname}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="mothersname"
                label="Mother's Name"
                {...fields}
                onChange={handleChange}
                value={values.mothersname}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                name="email"
                label="Email"
                {...fields}
                onChange={handleChange}
                value={values.email}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="mobile"
                label="Mobile No"
                {...fields}
                onChange={handleChange}
                value={values.mobile}
              />
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id="category-label">Cateogry</InputLabel>
                <Select
                  labelId="category-label"
                  name="category"
                  value={values.category}
                  label="Category"
                  onChange={handleChange}
                >
                  {cateogry.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl>
                <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              <FormLabel id="filesubmit">Passport photo :</FormLabel>
              <input
                accept="image/*"
                type="file"
                className="filesubmit"
                onChange={onFileUpload}
              />
            </Grid>

            <Grid item xs={7}>
              <TextField
                name="aadhar"
                label="Addhar"
                {...fields}
                onChange={handleChange}
                value={values.aadhar}
              />
            </Grid>
            <Grid item xs={5} className="dob">
              <FormLabel id="dateofbirth"> Date Of Birth :</FormLabel>

              <input
                name="dob"
                type="date"
                className="dateofbirth"
                value={values.dob}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id="course-label">Course</InputLabel>
                <Select
                  labelId="course-label"
                  value={values.course}
                  name="course"
                  label="Course"
                  onChange={handleChange}
                >
                  {mycourses.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="timing-label">Timing</InputLabel>
                <Select
                  labelId="timing-label"
                  name="timing"
                  value={values.timing}
                  label="timing"
                  onChange={handleChange}
                >
                  {timing.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel id="batch-label">Batch</InputLabel>
                <Select
                  labelId="batch-label"
                  name="batch"
                  value={values.batch}
                  label="batch"
                  onChange={handleChange}
                >
                  {batch.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="address"
                label="Address"
                {...fields}
                onChange={handleChange}
                value={values.address}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                name="district"
                label="District"
                {...fields}
                onChange={handleChange}
                value={values.district}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="state"
                label="State"
                {...fields}
                onChange={handleChange}
                value={values.state}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="pin"
                label="PIN"
                {...fields}
                onChange={handleChange}
                value={values.pin}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="matric_m"
                label="Matric Marks"
                {...fields}
                onChange={handleChange}
                value={values.matric_m}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="matric_y"
                label="Matric Year"
                {...fields}
                onChange={handleChange}
                value={values.matric_y}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="other_y"
                label="Other Course"
                {...fields}
                onChange={handleChange}
                value={values.other_y}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="other_m"
                label="Other Year"
                {...fields}
                onChange={handleChange}
                value={values.other_m}
              />
            </Grid>
          </Grid>
        </form>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          submit
        </Button>
      </div>
    </div>
  );
};

export default Addmission;
