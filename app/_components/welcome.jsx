import { motion } from "framer-motion";
import LoadingEffect from "./loadingEffect";

export default function WelcomeAnimations({ letters, tagLine, loading }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background-dark p-4 sm:p-6 md:p-8">
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
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-change-light to-change-dark blur-3xl" />
        </motion.div>

        <motion.div className="text-center relative z-10">
          <motion.div className="mb-4 sm:mb-6 md:mb-8">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-change-dark via-change-extraLight to-change-dark bg-clip-text text-transparent">
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
            className="tracking-wide font-tagline text-xl sm:text-2xl md:text-3xl text-text-semidark italic px-4 sm:px-6"
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
              {" "}
              {tagLine}
            </motion.span>
          </motion.p>

          <LoadingEffect />
        </motion.div>
      </div>
    </div>
  );
}
