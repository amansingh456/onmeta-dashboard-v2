import { FiLock, FiMail } from "react-icons/fi";
import Link from "next/link";
import dynamic from "next/dynamic";

const InputField = dynamic(() => import("../components/inputField"));
const FormButton = dynamic(() => import("../components/formButton"));
const IsHave = dynamic(() => import("../components/isHave"));

export default function LoginForm({ formData, setFormData, handleSubmit }) {
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <InputField
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        icon={FiMail}
        required
      />

      <InputField
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        icon={FiLock}
        required
      />

      <Link
        href="/reset-pass"
        className="block text-sm font-medium text-text-dark transition-colors text-right"
      >
        Forgot password?
      </Link>

      <FormButton text={"Sign In"} onClick={handleSubmit} />

      <IsHave
        text1={"Not registered ? "}
        text2={"Sign Up"}
        routePath={"/register"}
      />
    </form>
  );
}
