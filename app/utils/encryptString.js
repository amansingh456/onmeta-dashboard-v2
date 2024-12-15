import { STRING_ENCRYPT_DECRYPT } from "./globalVars";

export const encryptString = (content) => {
  let passcode = STRING_ENCRYPT_DECRYPT;
  let result = [];
  let passLen = passcode.length;
  for (let i = 0; i < content.length; i++) {
    let passOffset = i % passLen;
    let calAscii = content.charCodeAt(i) + passcode.charCodeAt(passOffset);
    result.push(calAscii);
  }
  return JSON.stringify(result);
};
export const decryptString = (content) => {
  let passcode = STRING_ENCRYPT_DECRYPT;
  let result = [];
  let str = "";
  let codesArr = JSON.parse(content);
  let passLen = passcode.length;
  for (let i = 0; i < codesArr.length; i++) {
    let passOffset = i % passLen;
    let calAscii = codesArr[i] - passcode.charCodeAt(passOffset);
    result.push(calAscii);
  }
  for (let i = 0; i < result.length; i++) {
    let ch = String.fromCharCode(result[i]);
    str += ch;
  }
  return str;
};
