import Toastify from "../_components/toast";
import { messages } from "./messages";

export default function getErrorCodeResult({ res, router }) {
  let { code, message } = res?.error || { code: null, message: null };
  if (code === null || message === null) {
    return Toastify.show({
      type: "error",
      message: messages.WRONG,
      autoClose: 3000,
    });
  }
  if (code === 40104) {
    return Toastify.show({
      type: "warn",
      message: message,
      autoClose: 3000,
    });
  }
  if (code === 40101) {
    router.push("/login");
    return Toastify.show({
      type: "info",
      message: message,
      autoClose: 3000,
    });
  }
  //   if (code === 40103) {
  //     router.push("/resend-otp");
  //     return Toastify.show({
  //       type: "warn",
  //       message: message,
  //       autoClose: 3000,
  //     });
  //   }
  if (code === 40102) {
    return Toastify.show({
      type: "warn",
      message: message,
      autoClose: 3000,
    });
  }
  if (code === 40104) {
    return Toastify.show({
      type: "warn",
      message: message,
      autoClose: 3000,
    });
  }
  return Toastify.show({
    type: "error",
    message: messages.WRONG,
    autoClose: 3000,
  });
}
