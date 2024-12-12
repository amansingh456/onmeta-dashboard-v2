import Onboarding from "./common/Onboarding";
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
// import { googleRecaptchaV3Key } from "../src/utils/GlobalVariables";

export default function Home() {
  return (
    // <GoogleReCaptchaProvider
    //   reCaptchaKey={googleRecaptchaV3Key}
    //   scriptProps={{
    //     async: false,
    //     defer: false,
    //     appendTo: "head",
    //     nonce: undefined,
    //   }}
    // >
    <Onboarding />
    // </GoogleReCaptchaProvider>
  );
}
