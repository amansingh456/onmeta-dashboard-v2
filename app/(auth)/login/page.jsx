"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiLock, FiMail } from "react-icons/fi";
import Link from "next/link";

// Dynamically import for components
const SideImg = dynamic(() => import("../components/sideImg"));
const ErrorMessage = dynamic(() => import("../components/errorMsg"));
const InputField = dynamic(() => import("../components/inputField"));
const FormButton = dynamic(() => import("../components/formButton"));
const IsHave = dynamic(() => import("../components/isHave"));
const AuthHeadLine = dynamic(() => import("../components/authMainLine"));

export default function Login() {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

  const handleAnimationComplete = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <SideImg handleAnimationComplete={handleAnimationComplete} />

      <div className="w-full md:w-[30%] bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {showForm && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full"
            >
              <AuthHeadLine text={"SignIn to Continue"} />

              <ErrorMessage error={error} />

              <form className="space-y-6">
                <InputField
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  icon={FiMail}
                  required
                />

                <InputField
                  type="password"
                  label="Password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  icon={FiLock}
                  required
                />

                <Link
                  href="/reset-pass"
                  className="block text-sm font-medium text-text-dark transition-colors text-right"
                >
                  Forgot password?
                </Link>

                <FormButton text={"Sign In"} onClick={handleSubmit} />

                <IsHave
                  text1={"Not registered ? "}
                  text2={"Sign Up"}
                  routePath={"/register"}
                />
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
