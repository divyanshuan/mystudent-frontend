import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AuthContextProvider from "./Context/Authcontext";
import Addmission from "./components/Addmission/addmission";
import Dashboard from "./components/Dashboard/dashboard";
import Fee from "./components/Fee/fee";
import Login from "./components/Login/login";
import StudentDetails from "./components/StudentDetail/studentdetail";
import Students from "./components/Students/students";
import ProtectedRoute from "./components/Authcomponent/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      
      <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
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
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

// export default App;
