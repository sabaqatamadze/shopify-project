import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";
import { IoCartOutline } from "react-icons/io5";
import { ThemeContext } from "@/contexts/ThemeContext";
import { AuthContext } from "@/contexts/AuthContext";
import { IsAuthModalOpenContext } from "@/contexts/AuthModalContext";

const CartItem = ({
  id,
  thumbnail,
  title,
  category,
  price,
  discountPercentage,
}) => {
  const { isDark } = useContext(ThemeContext);
  const newPrice = (price - (price * discountPercentage) / 100).toFixed(2);
  const { userAuth } = useContext(AuthContext);
  const { setIsAuthModalOpen } = useContext(IsAuthModalOpenContext);
  const addToCart = () => {
    if (userAuth === null) {
      setIsAuthModalOpen(true);
    }
  };
  return (
    <div className={isDark ? "cart-item dark" : "cart-item"}>
      <div className="image-place">
        <img src={thumbnail} />
      </div>
      <div className="textures">
        <span className="category">{category}</span>
        <p className="title">
          <Link to={`/product/${id}`}>{title}</Link>
        </p>
        <div className="price-and-cart">
          <div className="price-place">
            <p className="new-price"> ${newPrice}</p>
            <p>
              <span className="old-price">${price}</span>
              <span className="percentage">-{discountPercentage}%</span>
            </p>
          </div>
          <button className="add-to-cart-btn" onClick={addToCart}>
            <IoCartOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
