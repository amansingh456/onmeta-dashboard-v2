"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import useLogin from "./useLogin";

// Dynamically imported components
const SideImg = dynamic(() => import("../components/sideImg"));
const LoginForm = dynamic(() => import("./LoginForm"));
const Loadings = dynamic(() => import("../../_components/load"));
const AuthHeadLine = dynamic(() => import("../components/authMainLine"));

export default function LoginPage() {
  const { loading, formData, setFormData, handleSubmit } = useLogin();

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <SideImg />

      <div className="w-full h-[60vh] md:w-[30%] md:h-screen bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
            className="w-full"
          >
            <AuthHeadLine text={"SignIn to Continue"} />

            <LoginForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
          </motion.div>
        </div>
      </div>
      {loading && <Loadings />}
    </div>
  );
}
