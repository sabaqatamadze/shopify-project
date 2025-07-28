import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import {
  Home,
  Categories,
  Category,
  Product,
  Products,
  NotFound,
} from "./Pages";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category_id" element={<Category />} />
        <Route path="/product/:product_id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Routers;
