"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

export default function LoginForm({ onSwitchForm }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    // Simulate login API call
    if (
      formData.email === "test@example.com" &&
      formData.password === "password"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full"
    >
      <p className="text-text-semidark mb-8">Please sign in to continue</p>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-semidark" />
            <input
              type="email"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 text-text-light dark:text-text-dark outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-700"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-semidark" />
            <input
              type="password"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 text-text-light dark:text-text-dark outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-700"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
        </div>

        <Link
          href="/auth/forgot-password"
          className="block text-sm text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-right"
        >
          Forgot password?
        </Link>

        <button
          type="submit"
          className="w-full bg-gray-900 dark:bg-gray-800 text-white py-3 hover:bg-black dark:hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 group"
        >
          Sign In
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-center text-text-semidark">
          Not registered?{" "}
          <button
            type="button"
            onClick={onSwitchForm}
            className="text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Create an account
          </button>
        </p>
      </form>
    </motion.div>
  );
}
