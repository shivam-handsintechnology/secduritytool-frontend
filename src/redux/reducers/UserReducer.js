import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  access_token: sessionStorage.getItem("token"),
  domain: sessionStorage.getItem("domain") ? sessionStorage.getItem("domain") : ""
};
export const UserInfo = createSlice({
  name: "UserInfo",
  initialState: initialState,
  reducers: {
    setUserDetails: (state, action) => {
      if (action.payload.domain) {

        sessionStorage.setItem("domain", action.payload.domain)
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
