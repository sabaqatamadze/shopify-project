import { getSingleProduct } from "@/helper/api";
import { AuthContext } from "@/contexts/AuthContext";
import { IsAuthModalOpenContext } from "@/contexts/AuthModalContext";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Product = () => {
  const { product_id } = useParams();
  const [productData, setProductData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    getSingleProduct(product_id)
      .then((resp) => setProductData(resp))
      .finally(() => setIsLoading());
  }, []);

   const { userAuth } = useContext(AuthContext);
    const { setIsAuthModalOpen } = useContext(IsAuthModalOpenContext);
    const addToCart = () => {
      if (userAuth === null) {
        setIsAuthModalOpen(true);
      }
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
