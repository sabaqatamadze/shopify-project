import ProductsLayout from "@/Layouts/ProductsLayout/ProductsLayout";
import { getCategoryProducts } from "@/helper/api";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartItem } from "@/components";
import "./Category.css";
import { ThemeContext } from "@/contexts/ThemeContext";
const Category = () => {
  const { category_id } = useParams();
  const { isDark } = useContext(ThemeContext);
  const [categoryProducts, setCategoryProducts] = useState();
  useEffect(() => {
    getCategoryProducts(category_id).then((resp) =>
      setCategoryProducts(resp.products)
    );
  }, []);

  return (
    <div className="category-page">
      <p className={isDark ? "dark-title" : ""}>
        Category &#10095; <b>{category_id}</b>
      </p>
      {categoryProducts?.length === 0 ? (
        <h2>There are no products on this category</h2>
      ) : null}
      <ProductsLayout>
        {categoryProducts === undefined ? (
          <h1>Loading...</h1>
        ) : (
          categoryProducts.map((el) => (
            <CartItem
              key={el.id}
              id={el.id}
              title={el.title}
              category={el.category}
              thumbnail={el.thumbnail}
              price={el.price}
              discountPercentage={el.discountPercentage}
            />
          ))
        )}
      </ProductsLayout>
    </div>
  );
};

export default Category;
