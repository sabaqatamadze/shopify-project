import React from "react";
import "./Home.css";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";
import NewProducts from "./components/NewProducts/NewProducts";

const Home = () => {
  return (
    <div className="home-page">
      <TrendingProducts />
      <br />
      <br />
      <NewProducts />
    </div>
  );
};
export default Home;
