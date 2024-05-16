import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  domain: sessionStorage.getItem("domain") ? sessionStorage.getItem("domain") : "",
  webdomain: sessionStorage.getItem("webdomain") ? sessionStorage.getItem("webdomain") : "",
  isAuthenticated: sessionStorage.getItem("isAuthenticated") ? JSON.parse(sessionStorage.getItem("isAuthenticated")).isAuthenticated : false,
};
export const UserInfo = createSlice({
  name: "UserInfo",
  initialState: initialState,
  reducers: {
    setUserDetails: (state, action) => {
      if (action.payload.hasOwnProperty("domain")) {
        sessionStorage.setItem("domain", action.payload.domain)
      }
       if (action.payload.hasOwnProperty("webdomain")) {
        sessionStorage.setItem("webdomain", action.payload.webdomain)
      }
       if (action.payload.hasOwnProperty("isAuthenticated")) {
        if (action.payload.isAuthenticated) {
          sessionStorage.setItem("isAuthenticated", JSON.stringify(action.payload))
        }
      }
      return {
        ...state,
        ...action.payload,
      };
    },

  },
});
// Action creators are generated for each case reducer function
export const { setUserDetails } = UserInfo.actions;

export default UserInfo.reducer;
