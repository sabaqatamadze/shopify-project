import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {


  let isDarkLoc = JSON.parse(localStorage.getItem("isDark")) || false;
  const [isDark, setIsDark] = useState(isDarkLoc);

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  const obj = { isDark, setIsDark };
  return <ThemeContext.Provider value={obj}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
