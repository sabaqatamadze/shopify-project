import { Loading } from "@/components";
import { loginUsingToken } from "@/helper/api";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let accToken = localStorage.getItem("accToken");
    if (accToken === null) {
      setIsLoading(false);
    } else {
      loginUsingToken(accToken)
        .then((resp) => setUserAuth(resp))
        .catch(() => {
          localStorage.removeItem("accToken");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {isLoading ? <Loading /> : null}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
