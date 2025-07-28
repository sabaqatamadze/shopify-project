import React, { useState, useEffect } from "react";
import { getAllProducts } from "@/helper/api";
import ProductsLayout from "@/Layouts/ProductsLayout/ProductsLayout";
import { CartItem } from "@/components";

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState();
  useEffect(() => {
    getAllProducts(8, 8).then((resp) => setNewProducts(resp.products));
  }, []);
  return (
    <>
      {newProducts?.length === 0 ? (
        <h1>There are no any products</h1>
      ) : newProducts === undefined ? (
        <h1>Loading...</h1>
      ) : (
        <ProductsLayout title={<h1>New Arrivals</h1>}>
          {newProducts.map((el) => (
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

export default NewProducts;
