"use client";
import { motion } from "framer-motion";
import allAssests from "../../assets/images";
import GreenEffect from "../../_components/greenEffect";

export default function SideImg() {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.2,
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

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[40vh] md:h-screen md:w-[70%] p-4 sm:p-6 md:p-8 lg:p-16 flex items-center justify-center overflow-hidden"
      // onAnimationComplete={handleAnimationComplete}
    >
      <GreenEffect />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: `url(${allAssests.gridDesktop})`,
          zIndex: 1,
        }}
      />
      <div className="relative z-10 max-w-2xl px-4 sm:px-6 md:px-8">
        <motion.div variants={titleVariants} initial="hidden" animate="visible">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-4 sm:mb-6"
            {...glowingAnimation}
          >
            ONMETA
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-text-semidark leading-relaxed"
        >
          {taglineWords.map((word, index) => (
            <span key={index} className="inline-block mr-2">
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
