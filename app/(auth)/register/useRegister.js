import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sleep } from "../../utils/sleep";
import getErrorCodeResult from "../../utils/errorCodes";
import { messages } from "../../utils/messages";
import { checkEmailValid, checkPasswordValid } from "../../utils/validators";
import { setMerchantInfo } from "../../redux/stateSlice";
import { useRouter } from "next/navigation";
import { merchantVerifyOtp, registerMerchant } from "../apis/authApis";
import { showToast } from "../../utils/toast";

export default function useRegister() {
  const [merchantData, setMerchantData] = useState({
    email: "",
    password: "",
  });
  const [otpData, setOtpData] = useState({ otp: "" });
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const router = useRouter();
  const { merchantInfo } = useSelector((state) => state.stateSlice);

  const handleApiCall = async (apiFunc, data, successMessage) => {
    setLoading(true);
    const res = await apiFunc(data);
    await sleep(300);
    setLoading(false);

    if (res?.success) {
      showToast("success", successMessage);
      return true;
    } else {
      getErrorCodeResult({ res, router });
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      if (merchantData.email && merchantData.password) {
        if (!checkEmailValid(merchantData.email)) {
          showToast("warn", messages.CHECK_MAIL);
          return;
        }
        if (!checkPasswordValid(merchantData.password)) {
          showToast("error", messages.PASSWORD_WARN);
          return;
        }

        dispatch(setMerchantInfo({ email: merchantData.email }));

        if (
          await handleApiCall(
            registerMerchant,
            merchantData,
            messages.REGISTRATION_SUCCESS
          )
        ) {
          setStep(2);
          return;
        }
      } else {
        return showToast("error", messages.FILL_ALL_DETAILS);
      }
    } else {
      if (merchantInfo?.email && otpData.otp) {
        if (otpData.otp.length !== 4) {
          showToast("warn", messages.ENTER_OTP);
          return;
        }

        const otpObj = {
          otp: otpData.otp,
          email: merchantInfo.email,
        };

        if (
          await handleApiCall(merchantVerifyOtp, otpObj, messages.OTP_VERIFY)
        ) {
          router.push("/login");
        }
      } else {
        return showToast("error", messages.FILL_ALL_DETAILS);
      }
    }
  };

  return {
    step,
    loading,
    merchantData,
    setMerchantData,
    otpData,
    setOtpData,
    handleSubmit,
  };
}
