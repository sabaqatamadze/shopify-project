import React, { useContext, useEffect, useState } from "react";
import "./AuthModal.css";
import { FaUnlock, FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { IoIosClose } from "react-icons/io";
import { IsAuthModalOpenContext } from "@/contexts/AuthModalContext";
import { getToken, loginUsingToken } from "@/helper/api";
import { ErrorContext } from "@/contexts/ErrorContext";
import { AuthContext } from "@/contexts/AuthContext";

const AuthModal = () => {
  const { setIsAuthModalOpen } = useContext(IsAuthModalOpenContext);
  const { setError } = useContext(ErrorContext);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const { setUserAuth } = useContext(AuthContext);
  const login = (resp) => {
    loginUsingToken(resp?.accessToken)
      .then((resp) => setUserAuth(resp))
      .finally(() => {
        setIsAuthModalOpen(false);
      });
  };
  const getTokenFunction = () => {
    getToken(userDetails).then((resp) => {
      if (typeof resp === "object") {
        localStorage.setItem("accToken", resp?.accessToken);
        login(resp);
      } else if (typeof resp === "string") {
        setError(resp);
      }
    });
  };

  return (
    <div className="dark-background-screen">
      <div className="modal-container">
        <button className="close-btn" onClick={() => setIsAuthModalOpen(false)}>
          <IoIosClose />
        </button>
        <p className="modal-title">
          <FaUnlock />
          <span>Login</span>
          <FaUnlock />
        </p>
        <div className="input-place">
          <FaUser className="input-icon" />
          <input
            type="text"
            className="modal-input"
            placeholder="Your username here... "
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
          />
        </div>
        <div className="input-place">
          <RiLockPasswordFill className="input-icon" />
          <input
            type="password"
            className="modal-input"
            placeholder="Your password here... "
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
        </div>
        <button className="login-btn" onClick={getTokenFunction}>
          Submit
        </button>
        <p className="register">
          No account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
