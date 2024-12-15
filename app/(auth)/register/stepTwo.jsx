import dynamic from "next/dynamic";
import { FiKey } from "react-icons/fi";
const InputField = dynamic(() => import("../components/inputField"));
const FormButton = dynamic(() => import("../components/formButton"));
const AuthHeadLine = dynamic(() => import("../components/authMainLine"));
const IsHave = dynamic(() => import("../components/isHave"));

export default function StepTwo({ otpData, setOtpData, handleSubmit }) {
  return (
    <>
      <AuthHeadLine text="Verify Email" />
      <form className="space-y-6">
        <InputField
          type="text"
          label="OTP"
          placeholder="Enter OTP"
          value={otpData.otp}
          onChange={(e) =>
            setOtpData({
              ...otpData,
              otp: e.target.value,
            })
          }
          icon={FiKey}
          required
        />
        <FormButton text="Verify" onClick={handleSubmit} />
        <IsHave
          text1={"Didn't get OTP ?"}
          text2={"Send Again"}
          routePath={"/register"}
        />
      </form>
    </>
  );
}
