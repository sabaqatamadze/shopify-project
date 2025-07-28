import axios from "@/config/axios";

async function getAllProducts(skip, limit) {
  const resp = await axios.get("products", {
    params: {
      limit,
      skip,
    },
  });
  const { data } = resp;
  return data;
}

async function getCategoriesList() {
  const resp = await axios.get("products/categories");
  const { data } = resp;
  return data;
}

async function getCategoryProducts(category_id) {
  const resp = await axios.get(`products/category/${category_id}`);
  const { data } = resp;
  return data;
}

async function getSingleProduct(product_id) {
  const resp = await axios.get(`products/${product_id}`);
  const { data } = resp;
  return data;
}

async function getToken(userDetails) {
  try {
    const resp = await axios.post("user/login", userDetails);
    return resp.data;
  } catch (err) {
    return err.message;
  }
}

async function loginUsingToken(token) {
  const resp = await axios.get("user/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return resp.data;
}

export {
  getAllProducts,
  getCategoriesList,
  getCategoryProducts,
  getToken,
  loginUsingToken,
  getSingleProduct,
};
