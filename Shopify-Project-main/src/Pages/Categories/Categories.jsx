import React, { useContext, useEffect, useState } from "react";
import CategoriesLayout from "./Layouts/CategoriesLayout";
import CategoryContainer from "./Components/CategoryContainer";
import "./Categories.css";
import { getCategoriesList } from "@/helper/api";
import { ThemeContext } from "@/contexts/ThemeContext";
const Categories = () => {
  const [categories, setCategories] = useState();
  const { isDark } = useContext(ThemeContext);
  useEffect(() => {
    getCategoriesList().then((resp) => setCategories(resp));
  }, []);

  return (
    <div className={isDark ? "categories-page dark" : "categories-page"}>
      <p className="page-title">Categories</p>
      <CategoriesLayout>
        {categories === undefined ? (
          <h1>Loading...</h1>
        ) : (
          categories.map((category) => (
            <CategoryContainer
              category={category.name}
              slug={category.slug}
              key={category.slug}
            />
          ))
        )}
      </CategoriesLayout>
    </div>
  );
};

export default Categories;
