"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { setCookie } from "nookies";

export default function LoginForm({ onSwitchForm }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      formData.email === "test@example.com" &&
      formData.password === "password"
    ) {
      setCookie(null, "isLoggedIn", "true", { path: "/" });
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
      <h2 className="text-3xl font-bold mb-6 text-text-light ">
        Sign in to continue
      </h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-semidark" />
            <input
              type="email"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 text-text-light dark:text-text-dark outline-none focus:ring-1 focus:ring-gray-900"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-text-light">
            Password
          </label>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-semidark" />
            <input
              type="password"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-50  text-text-light  outline-none focus:ring-1 focus:ring-gray-900 "
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
          className="block text-sm font-medium text-text-light transition-colors text-right"
        >
          Forgot password?
        </Link>

        <button
          type="submit"
          className="w-full bg-gray-900  text-white py-3 hover:bg-black transition-colors flex items-center justify-center gap-2 group"
        >
          Sign In
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-sm font-medium text-text-semidark">
          Not registered?{" "}
          <button
            type="button"
            onClick={onSwitchForm}
            className="text-gray-900 hover:text-black  transition-colors"
          >
            Create an account
          </button>
        </p>
      </form>
    </motion.div>
  );
}
