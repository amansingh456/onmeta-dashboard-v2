"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { motion, AnimatePresence } from "framer-motion";
import allAssests from "@/app/assets/images";

export default function AuthClientWrapper() {
  const [isLogin, setIsLogin] = useState(true);

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

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.2,
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const taglineWords =
    "Accelerate your business with an easy-to-integrate, crypto on-ramp for your platform".split(
      " "
    );

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Side - Branding with Grid Background */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full md:w-[70%] p-8 md:p-16 flex items-center justify-center overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-[#1A1A1A] animate-gradient" />

        {/* Grid Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url(${allAssests.gridDesktop})`,
          }}
        />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              animate={{
                textShadow: [
                  "0 0 8px rgba(255,255,255,0.4)",
                  "0 0 12px rgba(255,255,255,0.6)",
                  "0 0 8px rgba(255,255,255,0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              ONMETA
            </motion.h1>
          </motion.div>

          <motion.div
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            {taglineWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Auth Forms */}
      <div className="w-full md:w-[30%] bg-white dark:bg-sidebar-dark p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <LoginForm key="login" onSwitchForm={() => setIsLogin(false)} />
            ) : (
              <SignupForm
                key="register"
                onSwitchForm={() => setIsLogin(true)}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
