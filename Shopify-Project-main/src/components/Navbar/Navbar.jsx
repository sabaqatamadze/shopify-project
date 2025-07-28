import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

import "./Navbar.css";
import { ThemeContext } from "@/contexts/ThemeContext";
import { IsAuthModalOpenContext } from "@/contexts/AuthModalContext";
import { AuthContext } from "@/contexts/AuthContext";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const { setIsAuthModalOpen } = useContext(IsAuthModalOpenContext);
  const { userAuth, setUserAuth } = useContext(AuthContext);
  const openCartFunction = () => {
    if (userAuth === null) {
      setIsAuthModalOpen(true);
    }
  };
  const logoutFunction = () => {
    setUserAuth(null);
    localStorage.removeItem("accToken");
  };

  return (
    <nav className={isDark ? "nav-bar dark" : "nav-bar"}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Shopify</Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for a product..." />
          <button className="search-btn">
            <IoSearch />
          </button>
        </div>
        <div className="nav-right-side">
          <div>
            <Link to="/products" className="link">
              Products
            </Link>
          </div>
          <div>
            <Link to="/categories" className="link">
              Categories
            </Link>
          </div>
          {userAuth == null ? (
            <button
              className="login-btn light-black"
              onClick={() => setIsAuthModalOpen(true)}
            >
              <FaUser />
              <span className="text">Login</span>
            </button>
          ) : (
            <button className="login-btn light-black" onClick={logoutFunction}>
              Log out
            </button>
          )}
          <button
            className="right-side-icon light-black"
            onClick={openCartFunction}
          >
            <IoCartOutline />
          </button>
          <button
            className="right-side-icon theme-btn"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <IoSunnyOutline /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
