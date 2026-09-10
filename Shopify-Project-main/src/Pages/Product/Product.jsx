import { getSingleProduct } from "@/helper/api";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { AuthContext } from "@/contexts/AuthContext";
import { IsAuthModalOpenContext } from "@/contexts/AuthModalContext";
import { ThemeContext } from "@/contexts/ThemeContext";

const Product = () => {
  const { product_id } = useParams();

  const [productData, setProductData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { userAuth } = useContext(AuthContext);
  const { setIsAuthModalOpen } = useContext(IsAuthModalOpenContext);
  const { isDark } = useContext(ThemeContext);

  const addToCart = () => {
    if (userAuth === null) {
      setIsAuthModalOpen(true);
    }
  };

  useEffect(() => {
    getSingleProduct(product_id)
      .then((resp) => setProductData(resp))
      .finally(() => setIsLoading(false));
  }, [product_id]);

  if (isLoading) {
    return <div className="product-loading">Loading...</div>;
  }

  const newPrice = (
    productData.price -
    (productData.price * productData.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className={isDark ? "product-page dark" : "product-page"}>
      <div className="product-container">

        <div className="product-image-container">
          <img
            className="product-image"
            src={productData.thumbnail}
            alt={productData.title}
          />
        </div>

        <div className="product-info">
          <h1 className="product-title">
            {productData.title}
          </h1>

          <p className="product-description">
            {productData.description}
          </p>

          <div className="product-price-place">
            <p className="product-new-price">
              ${newPrice}
            </p>

            <p className="product-old-price">
              ${productData.price}
            </p>

            <span className="product-percentage">
              -{productData.discountPercentage}%
            </span>
          </div>

          <button
            className="product-button"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default Product;
