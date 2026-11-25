import React, { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <nav className={isDark ? "nav-bar dark" : "nav-bar"}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Shopify</Link>
        </div>
        <div className="search-bar">
          <form
            className="search-bar"
            onSubmit={(e) => {
              e.preventDefault();

              if (search.trim()) {
                navigate(
                  `/products?search=${encodeURIComponent(search.trim())}`,
                );
              }
            }}
          >
            <input
              type="text"
              placeholder="Search for a product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="search-btn" type="submit">
              <IoSearch />
            </button>
          </form>
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
