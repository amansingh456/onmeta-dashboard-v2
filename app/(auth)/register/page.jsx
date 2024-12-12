"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiLock, FiMail, FiKey } from "react-icons/fi";
import { checkEmailValid, checkPasswordValid } from "../../utils/validators";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { messages } from "../../utils/messages";

// Dynamically import for components
const SideImg = dynamic(() => import("../components/sideImg"));
const ErrorMessage = dynamic(() => import("../components/errorMsg"));
const InputField = dynamic(() => import("../components/inputField"));
const FormButton = dynamic(() => import("../components/formButton"));
const IsHave = dynamic(() => import("../components/isHave"));
const AuthHeadLine = dynamic(() => import("../components/authMainLine"));

export default function Register() {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    token: "",
  });

  const [otpData, setOtpData] = useState({
    email: "",
    otp: "",
  });

  //   const { executeRecaptcha } = useGoogleReCaptcha();

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
        // please enter email along with OTPs
        // and if otp is verified make user login
      }
    } else {
      //please enter email along with OTPs
      // and if success is true then make user login
    }
  };

  const handleAnimationComplete = () => {
    setShowForm(true);
  };

  //   useEffect(() => {
  //     if (!executeRecaptcha) {
  //       return;
  //     }
  //     executeRecaptcha("enquiryFormSubmit").then((res) => {
  //       if (setUserData) {
  //         setUserData((prev) => ({ ...prev, token: res }));
  //       }
  //     });
  //   }, [executeRecaptcha]);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <SideImg handleAnimationComplete={handleAnimationComplete} />

      <div className="w-full h-[60vh] md:w-[30%] md:h-screen bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {showForm && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full"
            >
              <AuthHeadLine
                text={step === 1 ? "Create Account" : "Verify Email"}
              />
              <ErrorMessage error={error} />

              <form className="space-y-6">
                {step === 1 ? (
                  <>
                    <InputField
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      icon={FiMail}
                      required
                    />

                    <InputField
                      type="password"
                      label="Password"
                      placeholder="Create a password"
                      value={userData.password}
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                      icon={FiLock}
                      required
                    />
                  </>
                ) : (
                  <InputField
                    type="text"
                    label="OTP"
                    placeholder="Enter OTP"
                    value={otpData.otp}
                    onChange={(e) =>
                      setOtpData({ ...otpData, otp: e.target.value })
                    }
                    icon={FiKey}
                    required
                  />
                )}

                <FormButton
                  text={step === 1 ? "Sign Up" : "Verify"}
                  onClick={handleSubmit}
                />

                <IsHave
                  text1={"Already have an account ? "}
                  text2={"Sign In"}
                  routePath={"/login"}
                />
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
