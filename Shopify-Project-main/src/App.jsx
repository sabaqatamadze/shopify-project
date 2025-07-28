import React, { useContext } from "react";
import "./App.css";
import Routers from "./Routers";
import { ThemeContext } from "@/contexts/ThemeContext";
import AuthModal from "@/components/AuthModal/AuthModal";
import { IsAuthModalOpenContext } from "@/contexts/AuthModalContext";
import Swal from "sweetalert2";
import { ErrorContext } from "@/contexts/ErrorContext";
const App = () => {
  const { isDark } = useContext(ThemeContext);
  const { isAuthModalOpen } = useContext(IsAuthModalOpenContext);
  const { error, setError } = useContext(ErrorContext);
  if (error !== null) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error,
      theme: isDark ? "dark" : "light",
      animation: true,
    }).then((resp) => {
      if (resp.isConfirmed) {
        setError(null);
      }
    });
  }
  return (
    <div className={isDark ? "main-element dark" : "main-element"}>
      {isAuthModalOpen && <AuthModal />}

      <Routers />
    </div>
  );
};

export default App;
