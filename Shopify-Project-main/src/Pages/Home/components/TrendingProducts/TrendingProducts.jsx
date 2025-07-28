import React, { useState, useEffect } from "react";
import { getAllProducts } from "@/helper/api";
import ProductsLayout from "@/Layouts/ProductsLayout/ProductsLayout";
import { CartItem } from "@/components";
const TrendingProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getAllProducts(0, 8).then((resp) => setProducts(resp.products));
  }, []);
  return (
    <>
      {products?.length === 0 ? (
        <h1>There are no any products</h1>
      ) : products === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <ProductsLayout title={<h1>Trending Products</h1>}>
          {products.map((el) => (
            <CartItem
              key={el.id}
              id={el.id}
              title={el.title}
              category={el.category}
              thumbnail={el.thumbnail}
              price={el.price}
              discountPercentage={el.discountPercentage}
            />
          ))}
        </ProductsLayout>
      )}
    </>
  );
};

export default TrendingProducts;
