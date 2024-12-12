"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiKey, FiLock, FiMail } from "react-icons/fi";
import Link from "next/link";

// Dynamically import for components
const SideImg = dynamic(() => import("../components/sideImg"));
const ErrorMessage = dynamic(() => import("../components/errorMsg"));
const InputField = dynamic(() => import("../components/inputField"));
const FormButton = dynamic(() => import("../components/formButton"));
const AuthHeadLine = dynamic(() => import("../components/authMainLine"));

export default function ResetPass() {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
  });

  const [otpData, setOtpData] = useState({
    email: "",
    otp: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log(123);
    if (formData.email === "test@example.com") {
      console.log(formData.email);
      setStep(2);
      setCookie(null, "isLoggedIn", "true", { path: "/" });
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
              <AuthHeadLine
                text={step === 1 ? "Forgot Password" : "Reset Password"}
              />

              <ErrorMessage error={error} />

              <form className="space-y-6">
                {step === 1 ? (
                  <InputField
                    type="email"
                    label="Email"
                    placeholder="Enter your registered email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    icon={FiMail}
                    required
                  />
                ) : (
                  <>
                    <InputField
                      type="text"
                      label="OTP"
                      placeholder="Enter OTP"
                      value={otpData.email}
                      onChange={(e) =>
                        setOtpData({ ...otpData, otp: e.target.value })
                      }
                      icon={FiKey}
                      required
                    />
                    <InputField
                      type="password"
                      label="Password"
                      placeholder="Enter your new password"
                      value={otpData.email}
                      onChange={(e) =>
                        setOtpData({ ...otpData, email: e.target.value })
                      }
                      icon={FiMail}
                      required
                    />
                  </>
                )}

                <FormButton text={"Submit"} onClick={handleSubmit} />
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
