import { getAllProducts } from "@/helper/api";
import ProductsLayout from "@/Layouts/ProductsLayout/ProductsLayout";
import { CartItem } from "@/components";
import React, { useEffect, useState } from "react";
import "./Products.css";

const Header = ({ sort, setSort }) => {
  return (
    <div className="header">
      <p className="title">products</p>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="low-high">Price (low to high)</option>
        <option value="high-low">Price (high to low)</option>
      </select>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState();
  const [sort, setSort] = useState("default");

  useEffect(() => {
    getAllProducts(0, 194).then((resp) => {
      setProducts(resp.products);
    });
  }, []);

  if (products?.length === 0) {
    return <h1>There are no any products</h1>;
  }

  // Make a copy so we don't modify the original products array
  const sortedProducts = products
    ? [...products].sort((a, b) => {
        if (sort === "low-high") {
          return a.price - b.price;
        }

        if (sort === "high-low") {
          return b.price - a.price;
        }

        return 0;
      })
    : [];

  return (
    <div className="products-page">
      <ProductsLayout
        title={
          <Header
            sort={sort}
            setSort={setSort}
          />
        }
      >
        {products === undefined ? (
          <h1>Loading...</h1>
        ) : (
          sortedProducts.map((el) => (
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
