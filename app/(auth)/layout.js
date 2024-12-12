"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { googleRecaptchaV3Key } from "../utils/globalVars";

export default function AuthLayout({ children }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={googleRecaptchaV3Key}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
