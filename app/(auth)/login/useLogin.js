import { useState } from "react";
import { useRouter } from "next/navigation";
import { setMerchantInfo } from "../../redux/stateSlice";
import { showToast } from "../../utils/toast";
import { messages } from "../../utils/messages";
import { loginMerchant } from "../apis/authApis";
import { useDispatch } from "react-redux";
import { checkEmailValid, checkPasswordValid } from "../../utils/validators";
import { sleep } from "../../utils/sleep";
import getErrorCodeResult from "../../utils/errorCodes";
import {
  getCookie,
  getSessionStorage,
  setCookie,
  setSessionStorage,
} from "../../utils/authToken";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();

  const handleApiCall = async (apiFunc, data, successMessage) => {
    setLoading(true);
    const res = await apiFunc(data);
    await sleep(300);
    setLoading(false);

    if (res?.success) {
      showToast("success", successMessage);
      setCookie(
        "accessToken",
        res.data.accessToken + "breakpoint" + res.data.id,
        1
      );
      setSessionStorage("refreshToken", res.data.refreshToken);

      //   const token = getCookie();
      //   const t2 = getSessionStorage("refreshToken");

      router.push("/home");
      return true;
    } else {
      dispatch(setMerchantInfo({ email: formData.email, fromLogin: true }));
      getErrorCodeResult({ res, router });
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      if (!checkEmailValid(formData.email)) {
        showToast("warn", messages.CHECK_MAIL);
        return;
      }
      if (!checkPasswordValid(formData.password)) {
        showToast("error", messages.PASSWORD_WARN);
        return;
      }
      await handleApiCall(loginMerchant, formData, messages.LOG_SUCCESS);
      return;
    } else {
      return showToast("error", messages.FILL_ALL_DETAILS);
    }
  };

  return {
    loading,
    formData,
    setFormData,
    handleSubmit,
  };
}
