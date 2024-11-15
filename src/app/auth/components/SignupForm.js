"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

export default function SignupForm({ onSwitchForm }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (step === 1) {
      if (formData.email && formData.password) {
        setStep(2);
      } else {
        setError("Please fill in all fields");
      }
    } else {
      if (formData.otp === "123456") {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/");
      } else {
        setError("Invalid OTP");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full"
    >
      <h2 className="text-3xl font-bold mb-6 text-text-light">
        {step === 1 ? "Create Account" : "Verify Email"}
      </h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 ? (
          <>
            <div>
              <label className="block text-sm font-medium text-text-light mb-2">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-semidark" />
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 text-text-light outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-700"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light mb-2">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-semidark" />
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-50  text-text-light dark:text-text-dark outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-700"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
            </div>
          </>
        ) : (
          <div>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-gray-50  text-text-light outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-700 text-center text-2xl "
              placeholder="Enter OTP"
              maxLength={6}
              value={formData.otp}
              onChange={(e) =>
                setFormData({ ...formData, otp: e.target.value })
              }
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gray-900 dark:bg-gray-800 text-white py-3 hover:bg-black dark:hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 group"
        >
          {step === 1 ? "Sign Up" : "Verify"}
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className=" text-sm font-medium text-text-semidark">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchForm}
            className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Sign in
          </button>
        </p>
      </form>
    </motion.div>
  );
}
