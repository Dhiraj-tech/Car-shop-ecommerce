import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userDetails: {},
  isLoggedIn: false,
  success: true
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
      return{
        ...state,
        token: actions.payload.token,
        isLoggedIn: actions.payload.userDetails
    }
    },
    handleLogout: (state, actions) => {

    },
  },
});

export const { setUserDetails } = UserSlice.actions;
export default UserSlice.reducer;
