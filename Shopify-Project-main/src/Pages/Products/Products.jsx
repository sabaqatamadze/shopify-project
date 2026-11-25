import { getAllProducts } from "@/helper/api";
import ProductsLayout from "@/Layouts/ProductsLayout/ProductsLayout";
import { CartItem } from "@/components";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Products.css";

const Header = ({ sort, setSort, searchQuery }) => {
  return (
    <div className="header">
      <p className="title">
        {searchQuery ? `Results for "${searchQuery}"` : "products"}
      </p>

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
  const [searchParams] = useSearchParams();

  const searchQuery = (searchParams.get("search") || "").trim().toLowerCase();

  useEffect(() => {
    getAllProducts(0, 194).then((resp) => {
      setProducts(resp.products);
    });
  }, []);

  const getDiscountedPrice = (product) => {
    return (
      product.price -
      (product.price * product.discountPercentage) / 100
    );
  };

  const filteredProducts = products
    ? products.filter((item) => {
        if (!searchQuery) return true;
        const matchesTitle = item.title?.toLowerCase().includes(searchQuery);
        const matchesCategory = item.category?.toLowerCase().includes(searchQuery);
        return matchesTitle || matchesCategory;
      })
    : [];

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = getDiscountedPrice(a);
    const priceB = getDiscountedPrice(b);

    if (sort === "low-high") {
      return priceA - priceB;
    }

    if (sort === "high-low") {
      return priceB - priceA;
    }

    return 0;
  });

  return (
    <div className="products-page">
      <ProductsLayout
        title={
          <Header
            sort={sort}
            setSort={setSort}
            searchQuery={searchQuery}
          />
        }
      >
        {products === undefined ? (
          <h1>Loading...</h1>
        ) : sortedProducts.length === 0 ? (
          <h1>No products found for "{searchQuery}"</h1>
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