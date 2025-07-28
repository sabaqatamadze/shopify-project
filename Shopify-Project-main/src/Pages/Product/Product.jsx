import { getSingleProduct } from "@/helper/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { product_id } = useParams();
  const [productData, setProductData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleProduct(product_id)
      .then((resp) => setProductData(resp))
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <img src={productData.thumbnail} />
      <h3>{productData.title}</h3>
      <p>{productData.description}</p>
      <p>${productData.price}</p>
    </div>
  );
};

export default Product;
