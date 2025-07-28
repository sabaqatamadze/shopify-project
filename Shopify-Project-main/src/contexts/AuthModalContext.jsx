import React, { createContext, useState } from "react";
export const IsAuthModalOpenContext = createContext();
const AuthModalContextProvider = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  return (
    <IsAuthModalOpenContext.Provider
      value={{ isAuthModalOpen, setIsAuthModalOpen }}
    >
      {children}
    </IsAuthModalOpenContext.Provider>
  );
};

export default AuthModalContextProvider;
