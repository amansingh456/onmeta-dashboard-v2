import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import { FaSmileBeam } from "react-icons/fa";
import {
  PiSmileyMehFill,
  PiSmileySadFill,
  PiSmileyXEyesFill,
} from "react-icons/pi";

// Toast Component
const Toast = ({ type = "info", message, autoClose = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, autoClose);

    return () => clearTimeout(timer);
  }, [autoClose, onClose]);

  // Define type-based styles

  const typeStyles = {
    success: { bg: "bg-change-dark", icon: <FaSmileBeam /> },
    error: { bg: "bg-change-errorRed", icon: <PiSmileyXEyesFill /> },
    warn: { bg: "bg-change-warning", icon: <PiSmileySadFill /> },
    info: { bg: "bg-change-info", icon: <PiSmileyMehFill /> },
  };

  const { bg, icon } = typeStyles[type] || typeStyles.info;

  return (
    <div
      className={`flex items-center gap-3 w-full max-w-[300px] p-4 shadow-lg text-white ${bg} fixed top-1 right-1 z-50 animate-slide-in`}
    >
      <span className="text-xl">{icon}</span>
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

// Toastify Function
const Toastify = {
  show: ({ type = "info", message = "", autoClose = 3000 }) => {
    const toastContainer = document.createElement("div");
    document.body.appendChild(toastContainer);

    const root = ReactDOM.createRoot(toastContainer);

    const removeToast = () => {
      root.unmount();
      document.body.removeChild(toastContainer);
    };

    root.render(
      <Toast
        type={type}
        message={message}
        autoClose={autoClose}
        onClose={removeToast}
      />
    );
  },
};

export default Toastify;
