import React, { useContext } from "react";
import "./ProductsLayout.css";
import { ThemeContext } from "@/contexts/ThemeContext";
const ProductsLayout = ({ title, children }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="products-layout">
      <span className={isDark ? "dark" : ""}>{title}</span>
      <div className="products-container">{children}</div>
    </div>
  );
};

export default ProductsLayout;
