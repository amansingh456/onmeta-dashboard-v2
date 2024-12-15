"use client";
import dynamic from "next/dynamic";
import useRegister from "./useRegister";
const SideImg = dynamic(() => import("../components/sideImg"));
const Loadings = dynamic(() => import("../../_components/load"));
const StepOne = dynamic(() => import("./stepOne"));
const StepTwo = dynamic(() => import("./stepTwo"));

export default function Register() {
  const {
    step,
    loading,
    handleSubmit,
    merchantData,
    otpData,
    setMerchantData,
    setOtpData,
  } = useRegister();

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <SideImg />
      <div className="w-full h-[60vh] md:w-[30%] md:h-screen bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {step === 1 ? (
            <StepOne
              merchantData={merchantData}
              setMerchantData={setMerchantData}
              handleSubmit={handleSubmit}
            />
          ) : (
            <StepTwo
              otpData={otpData}
              setOtpData={setOtpData}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
      {loading && <Loadings />}
    </div>
  );
}
