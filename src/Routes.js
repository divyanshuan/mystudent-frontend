import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Addmission from "./components/Addmission/addmission";
import Dashboard from "./components/Dashboard/dashboard";
import Fee from "./components/Fee/fee";
import Login from "./components/Login/login";
import StudentDetails from "./components/StudentDetail/studentdetail";
import Students from "./components/Students/students";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="detail/:id" element={<StudentDetails />} />
        <Route path="admission" element={<Addmission />} />
        <Route path="students" element={<Students />} />
        <Route path="addfee" element={<Fee />} />
      </Route>
    </>
  )
);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

// export default App;
