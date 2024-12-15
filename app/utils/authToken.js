import { decryptString, encryptString } from "./encryptString";

export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, encryptString(value));
};

export const getLocalStorage = (key) => {
  return decryptString(window.localStorage.getItem(key));
};

export const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, encryptString(value));
};

export const getSessionStorage = (key) => {
  return sessionStorage.getItem(key);
};

export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    cname + "=" + encryptString(cvalue) + ";" + expires + ";path=/";
};

export const deleteSessionStorage = () => {
  sessionStorage.clear();
};

export const getCookie = () => {
  if (typeof window !== "undefined") {
    let a = window.document.cookie.split(";");
    let token = "";
    a.forEach((item) => {
      if (item.includes("accessToken")) {
        token = decryptString(item.split("=")[1]);
      }
    });
    return token;
  }
};
