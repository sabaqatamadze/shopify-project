import { getAllProducts } from "@/helper/api";
import ProductsLayout from "@/Layouts/ProductsLayout/ProductsLayout";
import { CartItem } from "@/components";
import React, { useEffect, useState } from "react";
import "./Products.css";

const Header = () => {
  return (
    <div className="header">
      <p className="title">products</p>
      <select name="" id="">
        <option value="">Default</option>
        <option value="">Price (low to high)</option>
        <option value="">Price (high to low)</option>
      </select>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getAllProducts(0, 194).then((resp) => setProducts(resp.products));
  }, []);
  if (products?.length === 0) {
    return <h1>There are no any products</h1>;
  }

  return (
    <div className="products-page">
      <ProductsLayout title={<Header />}>
        {products === undefined ? (
          <h1>Loading...</h1>
        ) : (
          products.map((el) => (
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

export default Products;
