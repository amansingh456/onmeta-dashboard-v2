"use client";
import { motion } from "framer-motion";

export default function WelcomeAnimations({ letters }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background-dark">
      <div className="relative w-full max-w-4xl mx-auto">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#66c29b] to-[#009a59] blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center relative z-10"
        >
          <motion.div className="mb-8">
            <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#cceadd] via-[#66c29b] to-[#009a59] bg-clip-text text-transparent">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: letters.length * 0.1 + 0.5,
              duration: 0.8,
            }}
            className="tracking-wide font-tagline text-2xl md:text-3xl text-gray-400 italic"
          >
            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              Connecting Real World to Crypto World
            </motion.span>
          </motion.p>

          {/* Dot Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: letters.length * 0.2 + 1.3,
              duration: 0.5,
            }}
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
                }}
                className="w-2 h-2 rounded-full bg-[#cceadd]"
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
                className="w-2 h-2 rounded-full bg-[#66c29b]"
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
                className="w-2 h-2 rounded-full bg-[#009a59]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
