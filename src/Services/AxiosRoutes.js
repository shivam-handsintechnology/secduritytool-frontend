import axios from "axios";
export const GetSysteminfo = async() => await axios.get('security/ssl');
export const GetSessionInfo = async() => await axios.get('security/sessionbroken/session');
export const GetJwtMessageInfo = async() => await axios.get('security/sessionbroken/jwttoken');
export const IntallationcreatePost = async(data) => await axios.post('security/setup', data);
export const SessionHijacking = async() => await axios.get('test/sessionhijacking');
export const CookiesGetAPi = async() => await axios.get('security/sessionbroken/cookies');
// export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
// export const deletePost = (id) => api.delete(`/posts/${id}`);
