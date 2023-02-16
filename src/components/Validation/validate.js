export function Validation(props) {
  console.log(props);
  if (props.form_no === "") {
    return { msg: "Form number is reqired", state: false };
  }
  if (props.firstname === "") {
    return { msg: "Firstname is reqired", state: false };
  }
  if (props.lastname === "") {
    return { msg: "Lastname is reqired", state: false };
  }
  if (props.fathersname === "") {
    return { msg: "Father's name is reqired", state: false };
  }
  if (props.mothersname === "") {
    return { msg: "Mother's name number is reqired", state: false };
  }
  if (props.mobile === "" || props.mobile.length !== 10) {
    return props.mobile === ""
      ? { msg: "Mobile number is reqired", state: false }
      : { msg: "Invalid Mobile Number", state: false };
  }
  if (props.email === "") {
    return { msg: "Email is reqired", state: false };
  }
  if (props.gender === "") {
    return { msg: "Gender is reqired", state: false };
  }
  if (props.aadhar === "" || props.aadhar.length !== 12) {
    return props.aadhar === ""
      ? { msg: "Aadhar number is reqired", state: false }
      : { msg: "Invalid Aadhar Number", state: false };
  }
  if (props.dob === "") {
    return { msg: "Date of birth is reqired", state: false };
  }
  if (props.category === "") {
    return { msg: "Category is reqired", state: false };
  }
  if (props.timing === "") {
    return { msg: "Timing is reqired", state: false };
  }
  if (props.course === "") {
    return { msg: "Course is reqired", state: false };
  }
  if (props.course === "") {
    return { msg: "Course is reqired", state: false };
  }
  if (props.batch === "") {
    return { msg: "Batch is reqired", state: false };
  }
  if (props.address === "") {
    return { msg: "Address is reqired", state: false };
  }
  if (props.district === "") {
    return { msg: "District is reqired", state: false };
  }
  if (props.state === "") {
    return { msg: "State is reqired", state: false };
  }
  if (props.pin === "") {
    return { msg: "Pin is reqired", state: false };
  }
  if (props.matric_m === "") {
    return { msg: "Matric Marks is reqired", state: false };
  }
  if (props.matric_y === "") {
    return { msg: "Matric Year is reqired", state: false };
  }
  return { msg: "all okk ", state: true };
}
