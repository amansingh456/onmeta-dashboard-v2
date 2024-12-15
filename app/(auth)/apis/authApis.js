import Toastify from "../../_components/toast";
import nextClient from "../../clients/nextClient";
import { messages } from "../../utils/messages";

const registerMerchant = async (merchantRegisterData) => {
  const response = await nextClient.post(
    "/api/auth/register",
    merchantRegisterData
  );

  if (
    !response ||
    response.headers["content-type"].includes("text/html") ||
    !response.data
  ) {
    Toastify.show({
      type: "error",
      message: messages.UNEXPECTED_RES,
      autoClose: 3000,
    });
    return;
  }
  return response?.data;
};

const merchantVerifyOtp = async (otpVerifyData) => {
  const response = await nextClient.post("/api/auth/verifyOtp", otpVerifyData);
  if (
    !response ||
    response.headers["content-type"].includes("text/html") ||
    !response.data
  ) {
    Toastify.show({
      type: "error",
      message: messages.UNEXPECTED_RES,
      autoClose: 3000,
    });
    return;
  }
  return response?.data;
};

const loginMerchant = async (merchantLoginData) => {
  const response = await nextClient.post("/api/auth/login", merchantLoginData);

  if (
    !response ||
    response.headers["content-type"].includes("text/html") ||
    !response.data
  ) {
    Toastify.show({
      type: "error",
      message: messages.UNEXPECTED_RES,
      autoClose: 3000,
    });
    return;
  }
  return response?.data;
};

export { registerMerchant, merchantVerifyOtp, loginMerchant };
