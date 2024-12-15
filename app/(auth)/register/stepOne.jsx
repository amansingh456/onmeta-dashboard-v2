import dynamic from "next/dynamic";
import { FiMail, FiLock } from "react-icons/fi";

const InputField = dynamic(() => import("../components/inputField"));
const FormButton = dynamic(() => import("../components/formButton"));
const AuthHeadLine = dynamic(() => import("../components/authMainLine"));
const IsHave = dynamic(() => import("../components/isHave"));

export default function StepOne({
  merchantData,
  setMerchantData,
  handleSubmit,
}) {
  return (
    <>
      <AuthHeadLine text="Create Account" />
      <form className="space-y-6">
        <InputField
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={merchantData.email}
          onChange={(e) =>
            setMerchantData({
              ...merchantData,
              email: e.target.value,
            })
          }
          icon={FiMail}
          required
        />
        <InputField
          type="password"
          label="Password"
          placeholder="Create a password"
          value={merchantData.password}
          onChange={(e) =>
            setMerchantData({
              ...merchantData,
              password: e.target.value,
            })
          }
          icon={FiLock}
          required
        />
        <FormButton text="Sign Up" onClick={handleSubmit} />
        <IsHave
          text1={"Already have an account ? "}
          text2={"Sign In"}
          routePath={"/login"}
        />
      </form>
    </>
  );
}
