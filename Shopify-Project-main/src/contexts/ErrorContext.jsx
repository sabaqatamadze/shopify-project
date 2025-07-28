import React, { createContext, useState } from "react";

export const ErrorContext = createContext();
const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
