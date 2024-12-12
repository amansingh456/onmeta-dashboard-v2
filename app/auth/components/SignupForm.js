"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { messages } from "../../utils/messages";
import { checkEmailValid, checkPasswordValid } from "../../utils/validators";

export default function SignupForm({ onSwitchForm }) {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    token: "",
  });

  // const [isCaptchaDone, setisCaptchaDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      if (userData?.email && userData?.password) {
        if (!checkEmailValid(userData.email)) {
          return setError(messages.checkMail);
        }
        if (userData.password === "") {
          return setError(messages.enterPassword);
        }
        if (!checkPasswordValid(userData.password)) {
          return setError(messages.passwordWarning);
        }
        // if (userData.token === "") {
        //   return setError(messages.captchaWarning);
        // }
        setStep(2);
      } else {
      }
    } else {
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
      {error && <p className="text-red-500 mb-2 italic">{error}</p>}

      <form className="space-y-6">
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
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 text-text-light outline-none focus:ring-1 focus:ring-gray-900"
                  placeholder="Enter your email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
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
                  className="w-full pl-10 pr-4 py-3 bg-gray-50  text-text-light  outline-none focus:ring-1 focus:ring-gray-900 "
                  placeholder="Create a password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
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
              className="w-full px-4 py-3 bg-gray-50  text-text-light outline-none focus:ring-1 focus:ring-gray-900 text-center text-lg "
              placeholder="Enter Otp"
              maxLength={6}
              value={userData.otp}
              onChange={(e) =>
                setUserData({ ...userData, otp: e.target.value })
              }
            />
          </div>
        )}

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-gray-900  text-white py-3 hover:bg-black transition-colors btn-smooth flex items-center justify-center gap-2 group"
        >
          {step === 1 ? "Sign Up" : "Verify"}
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className=" text-sm font-medium text-text-semidark">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchForm}
            className="text-gray-900 hover:text-black transition-colors btn-smooth"
          >
            Sign in
          </button>
        </p>
      </form>
    </motion.div>
  );
}
