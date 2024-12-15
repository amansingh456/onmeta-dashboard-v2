import axios from "axios";
import qs from "qs";

import {
  REACPTCHA_SECRET_TOKEN,
  REACPTCHA_SITE_VERIFY_URL,
} from "./globalVars";
import { messages } from "./messages";

async function recapToken(executeRecaptcha) {
  if (!executeRecaptcha) {
    return messages.CAPTCH_NOT_LOADED;
  }
  const token = await executeRecaptcha("enquiryFormSubmit");
  return token;
}

const verifyRecaptcha = async (token) => {
  let data = qs.stringify({
    secret: REACPTCHA_SECRET_TOKEN,
    response: token,
  });
  console.log("Data to be sent:", data);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: REACPTCHA_SITE_VERIFY_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
    timeout: 10000,
  };

  try {
    console.log("Sending request to reCAPTCHA verification API...");
    const axiosResponse = await axios.request(config);
    console.log("Response received from reCAPTCHA:", axiosResponse.data);
    return axiosResponse.data;
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error.message);
    if (error.response) {
      console.error("Response error:", error.response.data);
    }
    return { success: false };
  }
};

export { recapToken, verifyRecaptcha };
