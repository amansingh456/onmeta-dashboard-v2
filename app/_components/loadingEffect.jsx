import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingEffect = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <div className="flex justify-center gap-2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.2,
            delay: 0,
          }}
          className="w-2 h-2 rounded-full bg-change-extraLight"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.2,
            delay: 0.2,
          }}
          className="w-2 h-2 rounded-full bg-change-light"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.2,
            delay: 0.4,
          }}
          className="w-2 h-2 rounded-full bg-change-semidark"
        />
      </div>
    </motion.div>
  );
};

export default LoadingEffect;
