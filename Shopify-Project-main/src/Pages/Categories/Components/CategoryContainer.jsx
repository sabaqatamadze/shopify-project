import React, { useContext } from "react";
import "./CategoryContainer.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/contexts/ThemeContext";
const CategoryContainer = ({ category, slug }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={isDark ? "category-container dark" : "category-container"}>
      <p className="title">{category}</p>
      <Link to={`/category/${slug}`} className="link">
        View products
      </Link>
    </div>
  );
};

export default CategoryContainer;
