import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const [isLoggedIn,setIsLogedIn] = useState(false);
    const navigate = useNavigate();
    const checkUserToken = ()=>{
        const token = localStorage.getItem('token');

        if (!token || token === undefined){
            setIsLogedIn(false);
            return navigate('/');
        }
        setIsLogedIn(true);
    }
    useEffect(()=>{
        checkUserToken();
    },[isLoggedIn])
  return (
    <>
        {isLoggedIn?props.children:null}
    </>
  );
};

export default ProtectedRoute;
