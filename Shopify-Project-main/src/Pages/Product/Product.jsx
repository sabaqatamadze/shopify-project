import { getSingleProduct } from "@/helper/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { AuthContext } from "@/contexts/AuthContext";
import { IsAuthModalOpenContext } from "@/contexts/AuthModalContext";

const Product = () => {
  const { product_id } = useParams();

  const [productData, setProductData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { setIsAuthModalOpen } = useContext(IsAuthModalOpenContext);
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

  return (
    <div className="product-page">
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

          <p className="product-price">
            ${productData.price}
          </p>

          <button className="product-button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default Product;

