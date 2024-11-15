"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { motion, AnimatePresence } from "framer-motion";
import allAssests from "@/app/assets/images";

export default function AuthClientWrapper() {
  const [isLogin, setIsLogin] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const glowingAnimation = {
    animate: {
      textShadow: [
        "0 0 8px rgba(255, 255, 255, 0.4)",
        "0 0 12px rgba(255, 255, 255, 0.6)",
        "0 0 8px rgba(255, 255, 255, 0.4)",
      ],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  const taglineWords =
    "Accelerate your business with an easy-to-integrate, crypto on-ramp for your platform".split(
      " "
    );

  const handleAnimationComplete = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full md:w-[70%] p-8 md:p-16 flex items-center justify-center overflow-hidden"
        onAnimationComplete={handleAnimationComplete}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-[#1A1A1A] animate-gradient" />

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url(${allAssests.gridDesktop})`,
            zIndex: 1,
          }}
        />

        <div className="relative z-10 max-w-2xl">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              {...glowingAnimation}
            >
              ONMETA
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            {taglineWords.map((word, index) => (
              <span key={index} className="inline-block mr-2">
                {word}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full md:w-[30%] bg-white dark:bg-sidebar-dark p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {showForm &&
              (isLogin ? (
                <LoginForm key="login" onSwitchForm={() => setIsLogin(false)} />
              ) : (
                <SignupForm
                  key="register"
                  onSwitchForm={() => setIsLogin(true)}
                />
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
