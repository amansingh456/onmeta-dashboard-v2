import axios from "axios";
import { META_ENTITY_URL } from "../utils/globalVars";

const entityClient = axios.create({
  baseURL: `${META_ENTITY_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
entityClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    return res;
  }
);

export default entityClient;
