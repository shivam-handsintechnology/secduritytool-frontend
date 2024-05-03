import CryptoJS from "crypto-js";
export const SecretKey = process.env.REACT_APP_SECREY_KEY;
console.log(process.env)
console.log("SecretKey", SecretKey)
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SecretKey).toString();
}
export const decryptData = (data) => {
    const bytes = CryptoJS.AES.decrypt(data, SecretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}