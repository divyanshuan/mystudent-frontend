import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);
export const useAuthContextProvider = () => {
  return useContext(AuthContext);
};
const AuthContextProvider = ({ children }) => {
  const [userdata, setUserdata] = useState({});
  const updateUser = (res) => {
    setUserdata(res);
  };

  return (
    <AuthContext.Provider value={{ userdata, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
